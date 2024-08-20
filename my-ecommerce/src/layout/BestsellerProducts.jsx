import ProductCard from "../components/ProductCard";

const BestsellerProducts = () => {
  const products = [
    {
      image:
        "https://s3-alpha-sig.figma.com/img/2305/7910/d190d178c2a7b276e896b9d38b982bf6?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WD5fJaSK96nU6t6on68UZzAix001cF9lxSchvYSCDDTnLwk5v~wfV8piGL2E~siJbS7384gV5WZwVDrStv0M-RcJne-KkgLCn8yg2IQmidyKuZQeSJYykwflUKdQUzKj59isHSGU9khzHfJxJtP28HT0Mr1F9XQplSLgdyOEr6uDGpnaJjmMKNBqCvn00YmYCz-uS~8J4fYHBzPX2TcndvYQYz~i-i4MC2MeI~HAwztDkBjyeOS1qcyNwyFZGsjo4KnNbXryrBpilSw2MPOZnhykspDEuw7XGkhtzWp6hOrVXV20AAf3nEqguM14m0FvV3HNfQICHJuovcPDoKRRfQ__",
      category: "English Department",
      title: "Graphic Design",
      price: "16.48",
      discountedPrice: "6.48",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/edfd/a1c2/22054dedce3ff32fe480d8fc8eb07474?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hXTUnLKlVZnILy1W1ytqDp9uEPYjIZb7ZB2hOm7GD1aoXjvYwL6bMXC9Mzh~Wz2V1n1bJKb7U~4iLkD75lbX4tXUkH~67uCXC-ofaZ4wl5z-TJQ~u~DXaQwtErgwzY5zca-S43AvN99F4UBktwMhNYx2grS83QUOb5RvIzZpH466ob6G2SBjEjG8nLNHAYO-TyPJ2rFNjplIRLEdh~RTbc-NelSrToPl8Le13qOHZyFyGqzjifMpyPAMmlYiZwVy26e7taUR8~TeQgeWzfCrOco7jQxfyT~geh7N7i6qxmcXlipg9rqiZh3oZV-AKv5y7AaSyc1VLwe1-F~plWPT-Q__",
      category: "English Department",
      title: "Graphic Design",
      price: "16.48",
      discountedPrice: "6.48",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/4a6a/1016/1217dc07ba1cda4632e93a5851162bcb?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Mp1K71I2ubvtyu4TMrjCCcFRsRy~JV5AM1~BQae5JWtMQ~ItSAeebljT16XnYwZnurvx4lIem2AaMANU-MRp~JFEzKu5I1vukmWxcR8mtSkL-bfDVnR1dt2PhUCbA3JkF4HylHkxd14~6qaZvY~SyUyccXPN2P~VVEXs2-WGzWeHzpPu25Jlr-umixYL~ej~oTrH2qVmgjjqXy636c5wvUhwT-3Kai4Hw8STXQC1ODRGh~mpXhZMzav1YXWEmQBiMxxndIpscNYc9~ZrcYioNAUHQodsMfC8ySBqIV~8uecTWZ-RWlcR73EEbHe6fZYXI6j3gJRo2QQufrTh443pSA__",
      category: "English Department",
      title: "Graphic Design",
      price: "16.48",
      discountedPrice: "6.48",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/74e6/48e4/3f346f3e64ec6890751ec33b3c7f5197?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CsyLwrR9VWQWQ6Gh~-BRvAzxY7zol5jbDgdFxjHK2hwyjRsFgBKink1lk3gKEtSQvLnFXLama~tegg10ZO0U80XUbMN1eudRbs85uBKvg6hqVBYMz7ifQ0RV8LWERDEy3cj9~-pM5qH3Qt~d6d7vIJWSQjEiFvumzq65xU3TXn8rV7i2ai5d5G40gIXk5jnAanIgDjRXj6CRcAO77r6tjOUKe5Odu2Q71Od8gGOkV5fqLi5K7Hmy7-41P5JfYHJZrQRmwmItjxIiEs-DE2olq23nC69lN9p1ceypRtk6FR8ZHzeSCtTeOk0Bol7zOEkaKPSS5xgbWOXRrZGYWEN--A__",
      category: "English Department",
      title: "Graphic Design",
      price: "16.48",
      discountedPrice: "6.48",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },

    {
      image:
        "https://s3-alpha-sig.figma.com/img/41ba/1a58/2a6be5d0abdf4716fbac8cd3a73cb266?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WOdCZIdLv2dENWsNkVhQvXcFrWBieLJx6x4Lt~XKsfHqDN~pa-jU~viuTDCaiDuE7VXMB9ZlZsZyYki5ocTYkDk9XIRrvIk~otxk5~8DGj5yk6GLUcQ3LZgakWsskkeRcKfIALa-SgoShkL6HVXEAkkD3zqu1iTbwCtc36FKfKg58A9UQ2Al36DcXK6MIzDu7toU1ryQxomMZqSGB96liZMZfAR8OkrQlNZSiHCV7H4fNJ-Uu-M5EU2KPqEsSRvXP9HK1a70e6xH4kKYrGzTscq7bwFnkVa~SwKgcJeYJ6K4xjJ-RW3LLLUu5Ufznbmb7r2f2WfVba7UJFoThXJ6PA__",
      category: "English Department",
      title: "Graphic Design",
      price: "16.48",
      discountedPrice: "6.48",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/a4b9/d5de/fc9e3b83803619da05903140ffc77947?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZBnMbcoTvGvhJQjVC9rvz1Iy1JQY7kVpr5q7BNsILlUxBEyc6shAqPiC0hq8KoFo7YSI69gsQvqlK2jeOoiPVhr2S35Hy4Zt1U3zjEbklHUg-Uqy~0hz-GfcKJD3hBIG~O8bsaIL8sEb-iTuwoNfQgbr~hLG7LREAxtwCghLVD7WVusBg0IH47xgy16Fut19GgXHIvPCDjroiUVwxLgRP8IRScYYW1~wNooCIdo01dKHTkTcVcPASRpiXSMvGPSBVUqI13kypnOsgajCMEkq04bQSB6AfPUkbZteIG4ZXWRO6Q8~gtTeQ2007Jc6okd3gWPAxMGb0m1rYYs~6V5z8A__",
      category: "English Department",
      title: "Graphic Design",
      price: "16.48",
      discountedPrice: "6.48",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/110b/c11c/4432558f247264194359558513a225fe?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QzsuqxPo6HJuoitAbgkjHszF9AjklXlc5Q4pkRiG1ukOxSMjkf1h8ySHrIQND-qdgbB4uxDtVa-FdXFLlCgZPBnsOwzn9r6hnF3fuDOxpI2R~LqbsW6~QEjFv6thuBUzqbx~EXixADHVOVpcOGzaMfVvmuR5h4p6LAMD~~21aqUpLMUuYXd6ngE0IXj8DXBi2z4j-mtpU7CiLO2AnIV0wkpTgGTUBZ6SdpDiEDh5Y9r-AKW0ry~HDsGpu0jLU~8jKxoDyFGjrszD8m0BgTw~LaRYIErNoALi3m0ZZ43Gnnt9C-FfhfPUYfFnNQbjuxCrAweL4ujwARNvZ4ZP8J6Pgg__",
      category: "English Department",
      title: "Graphic Design",
      price: "16.48",
      discountedPrice: "6.48",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/c911/6841/0dcfe4d267b32aaf7b21288f7b9656f2?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Yiz~NgkxV1qtB8c8broxtAl30vljMw54y7SnK2nIwMUKh91UThwvwhhv9BAU9SyxwDsROs7R4hJPDoRE8qxw9kYumDZlgU8WnnSGOeM04JXMNrxOI6tmGvEaA4ghAecDDYvoqiPniJZCWq~PvvhOO3HWqkDVTPxdNCzHnRoCE0iueZVvx93uwFJjer4Ti-xtq3hvlCVhEIVCo2wbljndaaSSB7g8h89UBrqjxxJPNkSyW8gE4zUpDpMAv6yDqjlc5CxFqB-lHEKsvT1bUxZReF5Yhx88vujgvjyqLDKgjR7wxJx35fWUld~x2mtw9yzBNIuYBLfyuqpWbpI5m8p5HQ__",
      category: "English Department",
      title: "Graphic Design",
      price: "16.48",
      discountedPrice: "6.48",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
  ];

  return (
    <section className="flex font-montserrat ">
      <div className="w-[1400px] mx-auto max-md:w-full max-md:px-4 py-28  ">
        <div className="flex flex-col gap-3 pb-28">
          <p className="text-2xl font-normal text-center text-[#737373] mb-4">
            Featured Products
          </p>
          <p className="text-3xl font-bold text-center text-[#252B42] mb-4">
            BESTSELLER PRODUCTS
          </p>
          <p className="text-center text-lg font-normal text-[#737373]  max-w-[600px] mx-auto">
            Problems trying to resolve the conflict between
          </p>
        </div>
        <div className="grid grid-cols-4 gap-8  max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:flex max-sm:items-center max-sm:flex-col">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestsellerProducts;
