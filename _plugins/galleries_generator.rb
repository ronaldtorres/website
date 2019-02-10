require 'pry'

module Jekyll
  class GalleriesGenerator < Generator

    class Gallery
      attr_accessor :title

      def initialize(filename, yaml)
        @title = yaml.fetch("title")
      end
    end

    def generate(site)
      @galleries = site.data["galleries"].map { |filename, yaml| Gallery.new(filename, yaml) }
    end
  end
end