# vote_features_spec.rb

feature "Votes" do

  background do
    create(:question, content: "Deep philosophy")
    create(:answer, content: "Simple straight answer")
    @question = Question.last
    @answer = Answer.last
  end

  # create question upvote link on question index page
  scenario "visit index, can upvote question" do
    visit questions_index_path
    within ("#upvote-question-#{@question.id}") do
      click_button('Nice!')
    end
    expect(@question.votes_count).to be 1
  end

  # create question downvote link on question index page
  scenario "visit index, can downvote question" do
    visit questions_index_path
    within ("#downvote-question-#{@question.id}") do
      click_button('Buuuu')
    end
    expect(@question.votes_count).to be -1
  end

  # display question vote totals on question index page
  scenario "visit question index, and see vote totals on question index page" do
    create(:vote, upvote: true, question_id: @question.id)
    create(:vote, upvote: true, question_id: @question.id)
    visit questions_index_path
    expect(find("#votes-count-#{@question.id}")).to have_content '2'
  end

  # create answer upvote links on question show page
  scenario "visit show page and upvotes answer" do
    visit question_path(@question.id)
    within ("#upvote-answer-#{@answer.id}") do
      click_button('Nice!')
    end
    expect(@answer.votes_count).to be 1
  end

  # create answer downvote links on question show page
  scenario "visit show page and downvotes answer" do
    visit question_path(@question.id)
    within ("#downvote-answer-#{@answer.id}") do
      click_button('Buuuu')
    end
    expect(@answer.votes_count).to be -1
  end

  # display answer vote totals on question show page
  scenario "visit question index, and see vote totals on question index page" do
    create(:vote, upvote: true, answer_id: @answer.id)
    create(:vote, upvote: true, answer_id: @answer.id)
    visit question_path(@question.id)
    expect(find("#votes-count-#{@answer.id}")).to have_content '2'
  end

end


