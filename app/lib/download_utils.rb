# frozen_string_literal: true

require 'mechanize'
require 'nokogumbo'
require 'watir'

module DownloadUtils
  class << self

    def browser(silent = true)
      browser_flags = %w(ignore-certificate-errors disable-popup-blocking disable-translate disable-notifications start-maximized disable-gpu headless)
      browser_options ||= begin
        selenium_options = Selenium::WebDriver::Chrome::Options.new      
        browser_flags.each do |flag|
          selenium_options.add_argument(flag)
        end
        silent ? selenium_options : {}
      end
      browser = Watir::Browser.new(:chrome, options: browser_options)
      return browser
    end
    

    def get_download_url(url = "https://data.europa.eu/data/datasets/consolidated-list-of-persons-groups-and-entities-subject-to-eu-financial-sanctions-fisma?locale=en")
      agent = Mechanize.new
      page = agent.get(url)
      doc = Nokogiri::HTML5(page.body)
      return JSON.parse(result.body)
    end

  end
end

=begin

url = 'http://localhost:3000/users/sign_in'
browser = DownloadUtils.browser(false) 
browser.goto url
browser.text_field(id: "user_email").set "dev2.mt@emoneyplc.com"
browser.text_field(id: "user_password").set 'super.123'
browser.input(value: "Log in").click
browser.link(visible_text: "Logout").click
browser.close

=end
# url = "https://data.europa.eu/data/datasets/consolidated-list-of-persons-groups-and-entities-subject-to-eu-financial-sanctions-fisma?locale=en"