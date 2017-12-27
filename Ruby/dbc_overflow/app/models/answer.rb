class Answer < ActiveRecord::Base
  belongs_to :user
  belongs_to :question
  has_many :votes

  def votes_count
    self.votes.select{|vote| vote.upvote }.count - self.votes.select{|vote| !vote.upvote}.count
  end

end
