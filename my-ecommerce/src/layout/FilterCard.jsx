const FilterCard = () => {
  return (
    <section className=" font-montserrat bg-[#FAFAFA]">
      <div className="w-[1400px] mx-auto max-md:w-full max-md:px-4  py-28 ">
        <div className="pb-28">
          <p className="text-2xl font-bold text-center text-[#252B42] mb-6">
            EDITORS PICK
          </p>
          <p className="text-center text-[#737373]  max-w-[600px] mx-auto">
            Problems trying to resolve the conflict between
          </p>
        </div>
        <div className="grid grid-cols-4 gap-10 max-md:grid-cols-1 max-md:gap-4">
          <a
            href="#men"
            className="relative h-[666.667px] col-span-2 max-md:h-[500px] max-md:col-span-1"
          >
            <img
              src="https://s3-alpha-sig.figma.com/img/9da5/ab42/c0357746eb27e42fff6279478e2c8a48?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qVTeMUgdkBhBaeSPf8lv3Fm0jypYyCxJSfaQiciEF1wwIiG71B7TtMP45YCMuAoyiejLiGxOY0Ff77ZM4ZJIYYi97LGNR6-omI5MH5jkjJwBzBmtsWEzv9pPFjsvVXJcaBQNwefS2aG~AlTDaGldF6Maxmr4H26f9d09VqZ3Blpq6WIfD36T4VaEkPldIMeNKFDb8NqhsuN~COHAuxO6xsF6iawUbjeN-olFXfa6bkkVhLVSGkOjztSffeo0GYeFkNFws-FkgRRoHNGR1QifMdB3ma3MjyUsND~~RtlQZ1vN2CK4FGI6qt~sSLh8Ghw4zJvJutNwfJP3Ty7pXAI1gA__"
              alt="Men"
              className="w-full h-full object-cover"
            />
            <span className="absolute bottom-6 left-6 bg-white px-20 py-3 font-bold text-xl flex justify-center max-md:px-10 max-md:py-2 max-md:text-base">
              MEN
            </span>
          </a>
          <a href="#women" className="relative h-[666.667px] max-md:h-[500px]">
            <img
              src="https://s3-alpha-sig.figma.com/img/b384/eba6/08bd8616723a95d25fce7dcb8f25ba9d?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A7rd1ahjqiqiBNNmNKMqm2oykqpd7ZGBYuv973SBDcAF8pdVaibVq~PnA6pdi3fay89KvG249TjY7~Ld4vXR649qnPz4S-JPIA-fJ0UwKwrHHBQ7FqS-evFSUVSOUQ4EWeLQSnMy9zDw5~UhqSZBGCQryx~MkiFpL~9o5clp2vs3b-L~EOUtdSyQ7HE1J84oNSPX-JHoDG1A0ZSql4a3gACUqZrJu1~5La8Myy-V8xdVdydhGate3O0zHzJXGUwX5GRT2rN-e~a4copnTeps914Ew~RA-VTWWxapUtCq3AtWxDf-1T-u47e3QU9SrXbiNVKKw4GLnrQg6NemMzVyPg__"
              alt="Women"
              className="w-full h-full object-cover"
            />
            <span className="absolute bottom-6 left-6 bg-white px-10 py-3 font-bold text-xl flex justify-center max-md:px-8 max-md:py-2 max-md:text-base">
              WOMEN
            </span>
          </a>
          <div className="flex flex-col gap-[21.333px] max-md:gap-4">
            <a
              href="#accessories"
              className="relative h-[322.667px] max-md:h-[300px]"
            >
              <img
                src="https://s3-alpha-sig.figma.com/img/5077/f785/cbfd4a6cf9efad13d9b5d66b1b7cbf4f?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Eb31Qzo1s-eZ-Eql94DssQmAAEVijpTC1WxF8f8Fxf~chRGmDubeXKRQn-Kt1k~Bs-LPnN48wzkMQLc4MnnFxgf~1x~OJmGCjfoNSTrj2o7YvEDWBSVD17AU36LufeCz2YG4NTIO4GXE7JA~R9UpJxXVl~RWjLwTQKv1dwy-1Fz2IMQge0E0BUcr7g9jRHGcg9zcCd~YsLzowqbF4Fn1gXtpJDXuH3kv6jI1mMN-WFKrifnuC2UCEDW2wL1HpgPIPEvdBkkqWPnuxbYq0-dYaZWlughHBU0o4GUjCS0O9elPoFIw6-wZE4rcfBtRqpLwuoqScM5zOFQn-1K5C-dkBw__"
                alt="Accessories"
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-6 left-6 bg-white px-10 py-3 font-bold text-xl flex justify-center max-md:px-6 max-md:py-2 max-md:text-sm">
                ACCESSORIES
              </span>
            </a>
            <a href="#kids" className="relative h-[322.667px] max-md:h-[300px]">
              <img
                src="https://s3-alpha-sig.figma.com/img/edfc/ad0d/ba1967435dad649ed91c2e00be5f640f?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dQbvaWfN9d70BsFKmekg4HX5BCKYNZ0U05CwiPrW00LhbMGQRaLZ0eCsmgzT7SxJhUEy7UGEtrBM0usg~uskBnR0Upgtj4tuQ98oOFJJwl~znPI6Sj-XKF4m7NCRxH4gRR9o8X8V4PVLJLxTWifIUna93T7X0DjSpS4~G2Ug6lT6b2EpAzuRoBBFvXO-3mDbfrsfLcjdJWT6M6uOUecZCS1N8AgR5lnkD7hrMFe3eVtJQ3OSQCQzAxfqS0SNxgQ~p2WJinTmVsmHa91Y~o9Ba99G~BY2NwHQcoaRoPiGlCLDdmUJMfc6QUJDhXTws0Mo9k6EGfoTv5X0FR35491SYA__"
                alt="Kids"
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-6 left-6 bg-white px-10 py-3 font-bold text-xl flex justify-center max-md:px-6 max-md:py-2 max-md:text-sm">
                KIDS
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilterCard;
