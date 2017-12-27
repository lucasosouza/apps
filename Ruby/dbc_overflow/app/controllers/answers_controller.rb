class AnswersController < ApplicationController
  respond_to :html, :js
#index, show, new, edit, create, update

  def new
    @question = Question.find(params[:question_id])
  end

  def create
    @question = Question.find(params[:question_id])
    @answer = @question.answers.create(answer_params)
  end

  private

    def answer_params
      params.require(:answer).permit(:content)
    end

end
