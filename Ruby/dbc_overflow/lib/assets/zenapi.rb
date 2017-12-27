module ZenApi

  class ZenApiWrapper
    extend HTTParty

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

    def random_quote
      auth = {:username => ENV['GITHUB_USERNAME'], :password => ENV['GITHUB_PASSWORD']}
      response = HTTParty.get('https://api.github.com/zen', basic_auth: auth)
      if response.code == 200
        response.body
      else
        RANDOM_QUOTES.sample
      end
    end

  end

end
