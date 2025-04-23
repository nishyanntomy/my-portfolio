import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

export const ContactSection = () => {
  return (
    <section id="contact">
      <div className="py-16 pt-14">
        <div className="container">
          <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative">
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
              <div>
                <h2 className="font-serif text-2xl md:text-3xl">Open to New Opportunities</h2>
                <p className="text-sm mt-2 md:text-base">
                  {"I’m currently exploring new grad software engineering roles! If you think I’d be a good fit for your team—or just want to chat tech or projects, feel free to reach out—I'd love to connect!"}
                </p>
              </div>
              <div className="z-10 relative">
                <a
                  href="mailto:tomy.ni@northeastern.edu"
                  className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900"
                >
                  <span className="font-semibold">Contact Me</span>
                  <ArrowUpRightIcon className="size-4" />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
};
