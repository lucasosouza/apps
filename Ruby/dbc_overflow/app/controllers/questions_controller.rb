class QuestionsController < ApplicationController
  extend HTTParty
  respond_to :html,:js

  RANDOM_QUOTES = [
  "Use the digital SDD hard drive, then you can synthesize the digital pixel!",
  "Try to navigate the PNG microchip, maybe it will program the multi-byte alarm!",
  "transmitting the port won't do anything, we need to input the back-end THX capacitor!",
  "The JBOD circuit is down, override the optical feed so we can input the PNG matrix!",
  "We need to transmit the back-end EXE application!",
  "Use the solid state EXE system, then you can back up the mobile transmitter!",
  "The FTP application is down, hack the back-end pixel so we can connect the GB pixel!",
  "Try to synthesize the COM interface, maybe it will hack the primary driver!",
  "Try to generate the JBOD circuit, maybe it will connect the optical application!",
  "You can't transmit the panel without overriding the back-end PCI card!"]

  def index
    @questions = Question.all
    @quote = random_quote
  end

  def show
    @question = Question.find(params[:id])
  end

  def new
    #@question = Question.new
  end

  def edit
    @question = Question.find(params[:id])
  end

  def create
    @question = Question.new(question_params)
    @question.save
    #flash[:notice] = "Your question was posted successfully"
    #redirect_to root_path
  end

  def update
    @question = Question.find(params[:id])
    @question.update(question_params)
    flash[:notice] = "Question updated"
    redirect_to @question
  end

  def destroy
    question = Question.find(params[:id])
    question.answers.destroy_all
    question.destroy
    flash[:notice] = "Question deleted"
    redirect_to root_path
  end

  private

    def random_quote
      auth = {:username => ENV['GITHUB_USERNAME'], :password => ENV['GITHUB_PASSWORD']}
      response = HTTParty.get('https://api.github.com/zen', basic_auth: auth)
      if response.code == 200
        response.body
      else
        RANDOM_QUOTES.sample
      end
    end

    def question_params
      params.require(:question).permit(:title, :content)
    end

end


#index, show, new, edit, create, update
#no new and still renders the new page. why?
