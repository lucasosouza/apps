class VotesController < ApplicationController
  respond_to :html, :js

  def create
    vote = Vote.create(vote_params)
    if vote.answer_id
      @voted_id = vote.answer_id
      @votes_count = Answer.find(@voted_id).votes_count
    elsif vote.question_id
      @voted_id = vote.question_id
      @votes_count = Question.find(@voted_id).votes_count
    end
  end

  private

    def vote_params
      params["vote"]["upvote"] == "1" ? params["vote"]["upvote"] = true : params["vote"]["upvote"] == false
      params.require(:vote).permit(:user_id, :question_id, :answer_id, :upvote)
    end

end
