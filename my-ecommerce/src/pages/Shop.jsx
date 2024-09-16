import ProductCard from "../components/ProductCard";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Companies from "../layout/Companies";

const Shop = () => {
  const products = [
    {
      image:
        "https://s3-alpha-sig.figma.com/img/9da5/ab42/c0357746eb27e42fff6279478e2c8a48?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gd~4gG1PmD8cyuZ7DRoxPnXXdwZlLitoA9OayAxMujM7JFHvSOkA2xXp~igxm-LYInHt4mj1mlSLS2rTwcU3RzdUxIoIBK2-W0Ihe7hUgL1oQqLRRx1-13ANaJnxyD6ttirDK4dN1~bNe0jrECMFQaUJFmqsu-aK4Yw2X54PMiPCGUwHtW11dQQ2fRe9fN01Xu8F-fctWEihyA9R8Q2ohjdxzfaHJOoyKfIcsrr3KQANWLkAdVCai~2MBAG72tq~qCsoTGUTWE9HqE6hCFpW35H-kKAGinw7dwGW5UsYcidlZzW8hwSjlO~Ih4p9vJAV-qta6-aky8VkX-a0x1R~6Q__",
      category: "English Department",
      title: "Graphic Design",
      price: "16.48",
      discountedPrice: "6.48",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/b384/eba6/08bd8616723a95d25fce7dcb8f25ba9d?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d2fwSY7nyNeNo9g~MnLMSm0oBDHl2HaL8LuXWuJUOc21sJALSI5QIqbmR84h0YKVssgYllwNozxegfdeajh3u5LzvSLS5Td7IV~1nY~j2zV8Gz9qr51LiRcEPXhShGr~UbBaDg~sia0FszzK28q9dxFAfIM9eokys6~CWfOAJz4ubj6aPSEi5TGUKBXlr7y0hscewTyTPGEAQX2CykMkC1lGGal33K08fa-BAFKyDB2rh-EI-2sjPfyY2alOY5h3ihR0uKJzDYuIg1Nvoy5g5xJheZjc5DEWWniv0fc1IM3Rfjibhk-UrY~Moj8xv9twdEdAY5I38Brkn4LsUSNFXQ__",
      category: "English Department",
      title: "Graphic Design",
      price: "16.48",
      discountedPrice: "6.48",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/3e7f/7eaf/d5316e4fa827cf3570a2a8c7855d5a94?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oGYCczJbYOcCP2DIPwntTYxId2FYvq8Ms4gTQazd6gDdABTPU7MsQcgQ1opyNMqooxmZb5ytkf3UI6ufSrY4POob5k8N8LXNP9bs5hYuiDwkTjDJ7LEXFuIeOyp0xl6BEiAsSG4k0IwHVGCZwwXPIHDKA5mAkpjIClAosA8lL86BhW0EnOmpUFPpO71zQmDTYv7a4CIMLlPoTf18B8pbgBV~0n0bIwqKKbvMCKjyxZQmWQYISho28Ifw~DL4AxXMCavnPvH9Ihib0syAs-DvOKKK~qCTWqGe2PfuNi3GknQ7W5UIa0JwrN95F1fxWXGvEQnis5Y0y9xXFolz7kwLzQ__",
      category: "English Department",
      title: "Graphic Design",
      price: "16.48",
      discountedPrice: "6.48",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/edfc/ad0d/ba1967435dad649ed91c2e00be5f640f?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PnLLx4e2YXOtp1T6VFoLbLgIhS8TZo4jxuIX6MVep-3ibnAJEa224KCXxYvOLk1pv~Sepd8ZJGWFVQzcTTgY2DO1JiNucr8JU7DPamsAxHrcsLybH9ZF1raG5~PhbQcyfWYzUafE95R3pkYp0llwmg-i~XBQBjGNaxV56bGV7JkmG7E~ebubnOjg43PagwOsjrOYl9yoVGz7ZIDEHst2aWHRRMwXkJnApUp5yOaY7fQiMhCTFprqZQEpy838S~AYqARMj6EURqenoe718PSAPpciF0NaweP2PPxPlR5Id4u1q20unfClnAXXnCOf9kH1nqSb6Mi9uxfTex6K9FDGBA__",
      category: "English Department",
      title: "Graphic Design",
      price: "16.48",
      discountedPrice: "6.48",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/192d/37cf/726d1f63d6a96c19556e7a721f4f64da?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=S9WimifhpON9Ta8sBHSSKrQ4KMmYoTyEd5FX8LNyEIpquCGlArhqSIK5I7--aYwTZKWD2qskJA-cilrZXkJrXS3-Mq9q2cEqCAUd3M5fDEWNlpwcqwkSSaEuK1L0TKTpGo4ZojBxXcfAeufNuBFQi8z49jnGfsryALnolNVAiBNcHuWm130AV1KkS1pl1CJ9uJDDLGfANX~u0LOFiHWXYh7TmBu6MjuExi-7K-elvA1CIRW8F9~obpwkCqdaB0a9COakh2I2jTOuFcOFexu030~Vc7hmxRdJ2zX~zObs74KZdNH4MYDPvo123NL7ufpMB6VZ0kQq2MYpim-n95Lwtw__",
      category: "English Department",
      title: "Graphic Design",
      price: "16.48",
      discountedPrice: "6.48",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/8696/d051/d5b4e9d2b71de14231ff0f1540509e72?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QAh0T7hGYTFB9fGOT05VVvdVSwHGFbd1Nm16P8WqUBltMzUwiLN0J7y2gqgP6J~NAP3TWRHYRS5p17J0TcciwWI3o6V181kqb4bbO-OULGbiOtyHYMK0VPABs5S-XEMG7nuxbW~8Hq~JDhoUGzScTRcco-v2zyvX0RDSvZdXy-6ek0Al~Lc2NemXtJHHPu9GWwLIPuGy8VuC4~0s0d~wBSsism6317d7wFxf~xs2Zp4zPziV~wP2BCslsYoIxsZRcojUKvw9Dtsv5TP2sbJXS86orgMbwo6J2d6qoSW0hHTLoFNmyMw9K5MCHtqc3cWxr60UqfdDdnIH~fEkLIOXUQ__",
      category: "English Department",
      title: "Graphic Design",
      price: "16.48",
      discountedPrice: "6.48",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/e93a/ae2e/1138e5741f6879c9d8b83f0b79f972ce?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WjKpDHTcmBIbdtjhX18BEAsxJUz7jjBLJxxcqQs-~nUZcbR8mFIlDx4beN9afl9mChTMrCAj9C-SQuC30pSrWTBmQgp81yNFsmqGyJgQljYqtM6lcjbEqCYFZxDsxOq1XH0afTX4ALLEv-OQgk~e5o8poOpI0w~S9Da44OREcyKpmoqHnqk5xt9btGdvGbMBJpZxlj84fUINn6UuziChpUoHYrFdeaCbE9o4gvW0b6ooIlbcm5BHkT2v44PT7RTbRvtfw~scCWxo3sFRGvIKhP-9PC~iHWagmfvQDVi6QLAJ9Uh1dS3Q~kA6BmCblQz0z7jqBFFORkPxBSeG6aaNvA__",
      category: "English Department",
      title: "Graphic Design",
      price: "16.48",
      discountedPrice: "6.48",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/a014/4955/2eeaef7ecedd3954687aefbdb6236bb6?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AkesgZvzk2I6kYVAO1OFBALWH~txFypJ2MsSvcE4~pQAGBK-tU1KfAc-oeChll-CNO5QNhtfUH7WJ~z94yl9EQ0B9yoljwaQEYgFZ4SvPf3Us~I3vLqAXGVzujrB53htAcWzGpsgmzzLMtz0RGA0qZINlY61~QmxmtI21D7GA5~z5K120178aXT3axkT7SUPvDJM3fsYODyMgt4ffp6tKGsXzXiC2Y22QjvotelI0nBMoYh2g8BoPn-9YJy63hTjQ2tnpr28DeHdS0ErLNYr7ipNqhgJWUaNjAi7bJ-sI9NxDndpKlxr5OqyQl1PJeFtTPGiO3n~szmoOgFxmxeweg__",
      category: "English Department",
      title: "Graphic Design",
      price: "16.48",
      discountedPrice: "6.48",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/26f0/6d36/b8be071a9cfb336e8edfa8e534284b19?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YVYdrG-vfQX7G5F9fF1c4VD3L3dZ-3w3reJYMyvpEhtwqUrV6lswyeGsjkmkm97RrUqQ86ZgrlC-Nu1AVrZFq1TKmEAgnX-Wb4BHge3W~KtN9P0MQQk8d78iZmARjS0uvIgnGt-XEoWSGaSAmp4curtMw8LgfbKqMgxB0xa4lUvFDTbaQyx~9kG5c5BI0SmrFMv0IBxcPPwDjeYA6ocvFgY6~m5VUh5~EJ51Feo3CjVZ4VddvrJuQMEXJslAe0a2pA5p9IsumnLJViwj4~bAvO47yfPPW-K27kDjA~27UAcPG3cnLXkmxYAvIyYIcM1fMqd3KaOYtsHxxxMrUu7Iwg__",
      category: "English Department",
      title: "Graphic Design",
      price: "16.48",
      discountedPrice: "6.48",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/6722/d236/f78733bd50e39ff93410c2469644d50e?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IW-56nIOK7C1wjpapkVpjx~ET34ckbH5mb4~m8R0zNFQd1z1FgFeXcnnICe-dglw3qZ2PZFmo6KW5Ni~cG-PZ~XTfnQXr8bDgXR2ovH-sSMkjuwL9ZKBBwh6liUP2rmLd1NJX8RoDGY6CfLodWISio2jffEDjIWwqLGHRD7GdPVSgb6uhnjOx8IeaC7SjITQcmdOGPib0rkkYQgzKqSeN22TZKBxBcHCRbco4dLs3GDw-i8fegRw8Oe0ij2DmTnRxJl0gSssdNlDxAHW1IA0MBJipZpVf~p1av1P~wFUT~hb~O5NcKF986~lfc0tiXKKF8gm5R8MHzVp6GLLqbw1Fw__",
      category: "English Department",
      title: "Graphic Design",
      price: "16.48",
      discountedPrice: "6.48",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/605b/8375/2e220c164e230e86bf1054bccbd5ccab?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MIJLIsm93LsxLcss3lje1RIUkJXZn~Ns8IJwQ2Kz4XDmdmrYFhO6v919svRGWcah0El5~Dd7kElMpbHcxWlyPbfuMTVb~24623hCvEdfcxmAGNfNtidw4naQo4p7hZlt1EVOvflGxfO0XhfXvo4mYsdePoWDvFem0l7ibtespgSC-8FrpuA6jLZXL0-SoU6CMVCAEqFQMkAocZVlDMTdUA1iErWnvRmeZrA1dIeBd-kX~FCUzW3R3yzbCgm1UF6-ESkSG-6-tGPGqU5IOqaOYaesswID6pFrNeOsDlWQQ6RvghmmdkFUPZfy6zm4Y7EKHvNIYf46GaDE3OpGs6fa~A__",
      category: "English Department",
      title: "Graphic Design",
      price: "16.48",
      discountedPrice: "6.48",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/ab7b/991d/7f3b413395097d70baef867596099727?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KOGvoKNIAzC95KMRHFcCiFwbL41kiYxuC3fXHwBh64OlUnzTGNk~-Xhqm5oNrYAjLG7uJsygllNyJpu5YBPbAYYvjHJqOzGdpTSswxE-0IcDsx3kDgx~Pq1X6WiYJ0W4RUNIpgEodvu5n1Tv5FoywmtfOVLNRWdZiU~ykwC6rZPUROk0~DTLntGoMfaLNpp9eHd9dwS~0D~OIUPla5CfqDSz35peP1CmBoLZoKehxCEMmOh9DltW12elBWTsVPeRAvGElbnOQjEY7QEQPqNCYFmqlUsb8HrMEPJcLTJ5MHFxYlqlwqaG1kBKH4-uiggtrku0iP9nTXReOUrQHZHubw__",
      category: "English Department",
      title: "Graphic Design",
      price: "16.48",
      discountedPrice: "6.48",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
  ];

  const categories = [
    {
      name: "CLOTHS",
      image:
        "https://s3-alpha-sig.figma.com/img/c9a6/4276/a14f623312021f83a598c945b5165068?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oZwFVnqd8KhQjBfP4TmQPb9WALlYbUk2CVMmiu6nJKFXGrNnsuiLPbQ1MjQFlDr2r2xdy8fBmfK2Oh6~O1iTGuJb1GWVzhoEhVQpTNIxfNuYtG2AUAV-L8MRtqti41q5oVoZ317ZnAyoIW2eEqfnL6ABq6vSZj~hUQ196G-MR75pML9qytTF4KSEiElni-nZuPrw4rjKITr30jXKrDeb7sCs~Yg-gh383n~02qWVd9eIUWMvpJECf61uD1Emw7~2P3b-buwYqElfnf3y9m57ujXdrTFmoE-HYFfl5cuuPXBXIoVLPuezJ58LZT10E~pKe6AjXdSQZX8Ka7Vn2K8gDg__",
      items: 5,
    },
    {
      name: "CLOTHS",
      image:
        "https://s3-alpha-sig.figma.com/img/96c8/6912/d491d421800e62998b9af7c838cc25d1?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K1XpbFO7vfiRfiRjXyyZzu0dU95lTk1WcwLQrxHshnTtVyKOduYMExKOnBwjFDuuds2PK1yV0OXwxGlPa0TMEZx~vlCNBr8k7GqgItyp~dwujZU-ZQ0AJmFvl55iNdhgSbkmMCCBRYgnAqN6NjCr2SdDYonl-l5bH4lUH0pB3z0Ew2sFOi-R7AgTfoaC7HcYPhpfwQXvDQCzLo-YKBpZjaGrFsgENlWmtmXf5G~m7SCONXnrOf6rGVrNH-TJppu-A2k7tVBl8huhyUvqOdNR0DiNWOwGD~f2CBObTcFWarf68kjVOeuphDuQmpwiNZvufVTFFS~YtJrsKlgnACmHBA__",
      items: 5,
    },
    {
      name: "CLOTHS",
      image:
        "https://s3-alpha-sig.figma.com/img/7bc2/f9fb/559eeb7e6b92ed49f40128729a9f74f1?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BEYO9SKraT6tYw0CBqkJmtMRLvbtVweALVmMPLrZJYhmcRV~HM6UHk8-P6fJCxkVc2~A3XEssIrToGi95AS5pzS2NcDf0iZ-Dv-ARqSm555A8p3xE8sO88PBCE8w86kFBPDzT-tEDI0f9lRfyP-xuuIfcq4HIPTEGCcFGgTsePFYG4i1Z7jRUqOH0eOwcagZe7ZZotk0jBlTC5n6d1PFkAED1FnltywZcV8QrrCJTmFEblhhfIyEz4QWJr0PEd0CpzKhklQQpMyrQx2fJIP71CtZ0xZkJ1G8gDAFm1XNWm5FF59DbnAyk~A7eI2KdI-~8KO9CSZIu75xb~gaVnAxjQ__",
      items: 5,
    },
    {
      name: "CLOTHS",
      image:
        "https://s3-alpha-sig.figma.com/img/6e72/2a25/b740dd4eea5b5580d5e1601a818f98c2?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aqOvLI9-11RfD5k7JHVH1Yt0SX2Zp8-hp6GuV3NedRM8gNOVRnlD9iEsAfymiH0kG27qW~Vu~Otyl9MdGMNJjcvxz0kZz6czAhs87~fNZuLeCxvA~t6SHLQ3NBerz~K1gZjwwXMYcuWw422ribDwwrWSUNF-pcJXRP0UqnO3~trkSjgAJgMRzD~ntYfLzNrZtoYGXdi-lf7JgqSgl6oNkSTiQu~GLmg5YCJwjyfqskTEfBcYP2M-1hw0784wGjDSXjigG2sfqWzMSBmVnA6CAM2ijHyXGBlKbO3gzp6FgcCv9flxy72R6yNfopQKzel2CbJG2VdSXg7BVuBjPoHrrQ__",
      items: 5,
    },
    {
      name: "CLOTHS",
      image:
        "https://s3-alpha-sig.figma.com/img/2650/d8d7/92d83e3292df63340b2a44fd9763c159?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fIAz0PPzc1sD8xBfAuKnAA12zreJMO8-JcjoRqK0VtBqrJeMPAZNxLIPb7gOazVjGXvCH3oXdb9cC44~BQXBUtPrkloo~2ebWF4996kmwmsu24zvFs3~h7Jj7Fiwqm98JwG67fnl6Ye6PG9~9HHCSdx1j3dDqsiOQeFkhEmHN8Zqjg-xgsbCPh3AvKQGi~LDhofhIKM2aHS19xV530BCuaxxacUBgYCLydSZQKG8MfRyEO7I0Wy43ozCm2cW~1tI585CJqSYuAmvI4aHLjlvGZt3ulfcEhNhA9yByhG-3h40gvjt8GBWtcrR3ChyN7Bi5nONN0hCSSYYYlb4Qb-Cxg__",
      items: 5,
    },
  ];

  return (
    <>
      <Header />
      <main className="font-montserrat">
        <section className="bg-[#FAFAFA]">
          <div className="container mx-auto py-6 px-4">
            <div className="flex justify-between items-center flex-wrap gap-4">
              <span className="text-2xl font-bold text-[#252B42]">Shop</span>
              <div className="flex items-center gap-2 text-sm">
                <button
                  onClick={() => history.push("/")}
                  className="text-[#252B42] font-bold"
                >
                  Home
                </button>
                <span>
                  <i className="fa-solid fa-chevron-right text-[#BDBDBD]"></i>
                </span>
                <button
                  onClick={() => history.push("/shop")}
                  className="text-[#BDBDBD] font-bold"
                >
                  Shop
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#FAFAFA] py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="relative h-64 bg-cover bg-center flex flex-col items-center justify-center text-white"
                  style={{ backgroundImage: `url(${category.image})` }}
                >
                  <div className="absolute inset-0 bg-black opacity-20"></div>
                  <span className="relative z-10 text-lg font-bold mb-2">
                    {category.name}
                  </span>
                  <span className="relative z-10">{category.items} Items</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
              <p className="text-sm text-[#737373]">
                Showing all {products.length} results
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-[#737373]">Views:</span>
                  <button className="border p-2 bg-[#23A6F0] text-white">
                    <i className="fas fa-th"></i>
                  </button>
                  <button className="border p-2 text-[#252B42]">
                    <i className="fas fa-list"></i>
                  </button>
                </div>
                <div className="flex items-center gap-4 max-sm:w-full max-sm:justify-between">
                  <select className="border p-2 text-[#737373]">
                    <option>Popularity</option>
                  </select>
                  <button className="bg-[#23A6F0] text-white px-4 py-2 max-sm:flex-grow">
                    Filter
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>

            <div className="flex justify-center my-12 flex-wrap gap-2">
              <button className="px-5 py-4 border text-[#23A6F0] hover:bg-[#23A6F0] hover:text-white transition-colors">
                First
              </button>
              <button className="px-4 py-4 border text-[#23A6F0] hover:bg-[#23A6F0] hover:text-white transition-colors">
                1
              </button>
              <button className="px-4 py-4 border bg-[#23A6F0] text-white">
                2
              </button>
              <button className="px-4 py-4 border text-[#23A6F0] hover:bg-[#23A6F0] hover:text-white transition-colors">
                3
              </button>
              <button className="px-5 py-4 border text-[#23A6F0] hover:bg-[#23A6F0] hover:text-white transition-colors">
                Next
              </button>
            </div>
          </div>
        </section>

        <Companies />
      </main>
      <Footer />
    </>
  );
};

export default Shop;
