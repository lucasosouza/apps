class Question < ActiveRecord::Base
  belongs_to :user
  has_many :answers
  has_many :votes

  def votes_count
    self.votes.select{|vote| vote.upvote }.count - self.votes.select{|vote| !vote.upvote}.count
  end

end
