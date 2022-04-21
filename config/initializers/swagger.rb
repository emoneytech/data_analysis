class Swagger::Docs::Config
  def self.transform_path(path, api_version)
    # Make a distinction between the APIs and API documentation paths.
    "api/v1/#{path}"
  end
end

Swagger::Docs::Config.register_apis({
  '1.0' => {
    controller_base_path: 'api',
    api_extension_type: :json,
    api_file_path: 'public/api/v1/',
    base_path: ENV.fetch("CURRENT_HOST") { 'https://data-analysis.emoney.tech:8443/' },
    clean_directory: true,
    attributes: {
      info: {
        title: "HERA 2.0",
        description: "Data Analysis Solution for FinTech.",
        termsOfServiceUrl: ENV.fetch("CURRENT_HOST") { 'https://data-analysis.emoney.tech:8443/' },
        contact: "hello@emoney.tech"
      }
    }
  }
})
=begin
class Swagger::Docs::Config
  def self.transform_path(path, api_version)
    # Make a distinction between the APIs and API documentation paths.
    "apidocs/#{path}"
  end
end

=end
