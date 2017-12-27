
feature "Questions" do

  background do
    create(:question, content: "Deep philosophy")
    create(:answer, content: "Simple straight answer")
    @question_id = Question.last.id
  end

  #Create a question index page that lists all questions.
  scenario "visit index shows a list with all the questions" do
    visit '/'
    expect(page).to have_content 'Deep philosophy'
  end

  #Create a question show page that lists the question and all associated answers.
  scenario "visit show shows a list with all the questions and associated answers" do
    visit question_path(@question_id)
    expect(page).to have_content 'Simple straight answer'
  end

  #create a new question form on the root page
  scenario "visit show, fill in and submit a form to post a new question", js: true do
    visit root_path
    click_link('Post new question')
    within('#new-question-form') do
      fill_in 'Title', with: 'What is this?'
      fill_in 'Content', with: 'Please debug these 900 lines of code, it does not work'
    end
    click_button 'Post question'
    expect(page).to have_content 'Your question was posted successfully'
    expect(page).to have_content 'Please debug these 900 lines of code, it does not work'
  end

  #create a new answer form on the question show page
  scenario "visit show, fill in and submit a form to post a new answer", js: true do
    wait_for_ajax_to_finish
    puts @question_id
    puts Question.find(@question_id)
    visit question_path(@question_id)
    click_link('Post new answer')
    wait_for_ajax_to_finish
    within('#new-answer-form') do
      fill_in 'Content', with: 'Another good answer to your question'
      click_button 'Post answer'
    end
    wait_for_ajax_to_finish
    expect(page).to have_content 'Another good answer to your question'
    expect(Answer.find_by_content('Another good answer to your question')).not_to be nil
  end

  #create a destroy question link on the question show page
  scenario "visit show, click on a link to destroy a question" do
    visit question_path(@question_id)
    click_link('Delete question')
    expect(page).to have_content 'Question deleted'
    expect(Question.find_by_title('Deep philosophy')).to be nil
  end

  #create an update question form on the question edit page
  scenario "visit question edit page and see the question" do
    visit edit_question_path(@question_id)
    fill_in 'Content', with: 'A deeper and meaningless content'
    click_button 'Update question'
    expect(page).to have_content 'Question updated'
    expect(Question.find(@question_id).content).to eq 'A deeper and meaningless content'
  end

end