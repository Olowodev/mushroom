import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { FiArrowRight } from 'react-icons/fi'
import { AiFillFacebook, AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { useEffect, useRef, useState } from 'react'
import useLocoScroll from '../hooks/useLocoScroll'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import gsap from 'gsap'
import Lenis from '@studio-freight/lenis'


gsap.registerPlugin(ScrollTrigger)


export default function Home() {
  const ref = useRef(null)
  const [preloader, setPreload] = useState(true)

  // useEffect(()=> {
  //   let ctx = gsap.context(() => {
  //   const lenis = new Lenis({
  //     wrapper: document.querySelector('.scrollContainer'),
  //     content: document.querySelector('.scrollContent'),
  //     duration: 1.2,
  //     smoothTouch: true,
  //     easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  //   })

  //   function raf(time) {
  //     lenis.raf(time)
  //     requestAnimationFrame(raf)
  //   }

  //   requestAnimationFrame(raf)
  // })

  //   return () => {
  //     ctx.revert()
  //   }
  // }, [])


  useEffect(() => {
    if (!preloader && ref) {
      // if (typeof window === 'undefined' || !window.document) {
      //   return;
      // }
    }
  }, [preloader])

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: '#firstSection',
          scroller: '.scrollContainer'
        }
      })
        .to('#firstSVG', {
          scale: 1,
          duration: 2
        })
        .to('#firstContent', {
          y: 0,
          opacity: 1,
          duration: .5
        })
        .to('#firstImg', {
          opacity: 1
        })
    })

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: '#firstSection',
          scroller: '.scrollContainer',
          scrub: true,
          start: 'top top'
        }
      })
        .to('#firstImg', {
          yPercent: -100,
          ease: 'none'
        })
    })

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    let ctx = gsap.context(() => {
    gsap.timeline({yoyo: true, repeat: -1})
    .to('#thirdImg', {
      y: -10,
      ease: 'power1.easeInOut'
    })
  })

  return () => ctx.revert()
  }, [])

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: '#secondSection',
          scroller: '.scrollContainer',
          start: 'top top',
          onEnter: function () {
            gsap.timeline().to('#secondSVGPath', {
              strokeDashoffset: 0,
              duration: 2,
            })
              .to('#secondContent', {
                opacity: 1,
                duration: .5,
                delay: -1
              })
              .to('#secondSVG', {
                fill: '#000',
                delay: -1
              })
          },
          onLeave: function () {
            gsap.timeline().to('#secondSVGPath', {
              strokeDashoffset: 1300,
              duration: .5,
            })
              .to('#secondContent', {
                opacity: 0,
                duration: .5,
                delay: -1
              })
              .to('#secondSVG', {
                fill: 'transparent',
                delay: -1
              })
          },
          onEnterBack: function () {
            gsap.timeline().to('#secondSVGPath', {
              strokeDashoffset: 0,
              duration: 2,
            })
              .to('#secondContent', {
                opacity: 1,
                duration: .5,
                delay: -1
              })
              .to('#secondSVG', {
                fill: '#000',
                delay: -1
              })
          },
          onLeaveBack: function () {
            gsap.timeline().to('#secondSVGPath', {
              strokeDashoffset: 1300,
              duration: 2,
            })
              .to('#secondContent', {
                opacity: 0,
                duration: .5,
                delay: -1
              })
              .to('#secondSVG', {
                fill: 'transparent',
                delay: -1
              })
          }
        }
      })


    })


    return () => ctx.revert()
  }, [])

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: '#thirdSection',
          scroller: '.scrollContainer',
          start: 'top top',
          onEnter: function () {
            gsap.to('#thirdList', {
              y: 0,
              opacity: 1,
              stagger: .3
            })
          },
          onLeave: function () {
            gsap.to('#thirdList', {
              y: 50,
              opacity: 0,
              stagger: .3
            })
          },
          onEnterBack: function () {
            gsap.to('#thirdList', {
              y: 0,
              opacity: 1,
              stagger: .3
            })
          },
          onLeaveBack: function () {
            gsap.to('#thirdList', {
              y: 50,
              opacity: 0,
              stagger: .3
            })
          }
        }
      })


    })


    return () => ctx.revert()
  }, [])

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: '#fourthSection',
          scroller: '.scrollContainer',
          start: 'top top',
          onEnter: function () {
            gsap.to('#fourthImg', {
              duration: .5,
              clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
              stagger: .3
            })
          },
          onLeave: function () {
            gsap.to('#fourthImg', {
              duration: .5,
              clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
              stagger: .3,
            })
          },
          onEnterBack: function () {
            gsap.to('#fourthImg', {
              duration: .5,
              clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
              stagger: .3,
              delay: .5
            })
          },
          onLeaveBack: function () {
            gsap.to('#fourthImg', {
              duration: .5,
              clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
              stagger: .3,
            })
          }
        }
      })


    })


    return () => ctx.revert()
  }, [])

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: '#fifthSection',
          start: 'top +=50px',
          scroller: '.scrollContainer',
          onEnter: function () {
            gsap.from('#fifthText', {
              duration: 2,
              textContent: 0,
              snap: { textContent: 1 },
              onUpdate: function () {
                this.targets()[0].innerHTML = Math.ceil(this.targets()[0].textContent)
              }
            })
          },
          onLeave: function () {
            gsap.from('#fifthText', {
              duration: 2,
              textContent: 0,
              snap: { textContent: 1 },
              onUpdate: function () {
                this.targets()[0].innerHTML = Math.ceil(this.targets()[0].textContent)
              }
            })
          },
          onEnterBack: function () {
            gsap.from('#fifthText', {
              duration: 2,
              textContent: 0,
              snap: { textContent: 1 },
              onUpdate: function () {
                this.targets()[0].innerHTML = Math.ceil(this.targets()[0].textContent)
              }
            })
          },
          onLeaveBack: function () {
            gsap.from('#fifthText', {
              duration: 2,
              textContent: 0,
              snap: { textContent: 1 },
              onUpdate: function () {
                this.targets()[0].innerHTML = Math.ceil(this.targets()[0].textContent)
              }
            })
          }
        }
      })
        

    })


    return () => ctx.revert()
  }, [])

  const [timer, setTimer] = useState(3)

  const id = useRef(null)

  const clear = () => {
    window.clearInterval(id.current)
    setPreload(false)
  }

  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((time) => time - 1)
    }, 1000)
    return () => clear()
  }, [])

  useEffect(() => {
    if (timer === 0) {
      clear()
    }
  }, [timer])

  // if (typeof window === 'undefined' || !window.document) {
  //   return null
  // }
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id='scrollContainer' ref={ref} data-scroll-container className={`${styles.container} scrollContainer`}>
        <div className='scrollContent'>
          <div className={styles.socials}>
            <div>
              <AiFillFacebook className={styles.social} />
            </div>
            <div>
              <AiOutlineTwitter className={styles.social} />
            </div>
            <div>
              <AiFillInstagram className={styles.social} />
            </div>
          </div>
          <div id='firstSection' className={styles.firstSection}>
            <div id='firstImg' className={styles.firstImg}>
              <img src='./img5Pixcleaner.webp' />
            </div>
            <div className={styles.navBar}>
              <p>Specs</p>
              <p>About</p>
              <p>Store</p>
            </div>
            <div>
              {/* <h1 className={styles.firstSectionHeroText}>mushroom</h1> */}
              <svg id='firstSVG' className={styles.firstSectionHeroSVG} width="1331" height="192" viewBox="0 0 1331 192" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.668254 189V47.4327H38.0877V72.4098H39.7467C42.696 64.1148 47.6116 57.571 54.4933 52.7784C61.3751 47.9857 69.6086 45.5894 79.1939 45.5894C88.902 45.5894 97.1663 48.0164 103.987 52.8705C110.807 57.6632 115.354 64.1762 117.627 72.4098H119.102C121.99 64.2991 127.212 57.8168 134.77 52.9627C142.389 48.0472 151.391 45.5894 161.775 45.5894C174.985 45.5894 185.707 49.7983 193.941 58.2162C202.236 66.5726 206.383 78.4313 206.383 93.7923V189H167.213V101.534C167.213 93.6694 165.123 87.7708 160.945 83.8384C156.767 79.9059 151.544 77.9397 145.277 77.9397C138.149 77.9397 132.589 80.2132 128.595 84.76C124.601 89.2454 122.604 95.1748 122.604 102.548V189H84.5395V100.705C84.5395 93.7616 82.5426 88.2316 78.5487 84.1149C74.6163 79.9981 69.4242 77.9397 62.9726 77.9397C58.6101 77.9397 54.6776 79.0457 51.1753 81.2577C47.7345 83.4083 45.0002 86.4497 42.9725 90.3822C40.9449 94.2531 39.9311 98.8 39.9311 104.023V189H0.668254ZM328.181 128.723V47.4327H367.444V189H329.748V163.286H328.273C325.078 171.581 319.763 178.247 312.328 183.286C304.955 188.324 295.953 190.843 285.324 190.843C275.861 190.843 267.535 188.693 260.347 184.392C253.158 180.091 247.535 173.977 243.48 166.051C239.486 158.124 237.459 148.631 237.397 137.571V47.4327H276.66V130.567C276.721 138.923 278.964 145.528 283.388 150.382C287.812 155.236 293.741 157.663 301.176 157.663C305.907 157.663 310.331 156.588 314.448 154.438C318.565 152.226 321.883 148.969 324.402 144.668C326.983 140.367 328.242 135.052 328.181 128.723ZM516.638 87.8015L480.693 90.0135C480.078 86.9413 478.757 84.1763 476.73 81.7185C474.702 79.1993 472.029 77.2024 468.711 75.7277C465.455 74.1916 461.553 73.4236 457.006 73.4236C450.923 73.4236 445.793 74.7139 441.614 77.2946C437.436 79.8138 435.347 83.1932 435.347 87.4328C435.347 90.8123 436.699 93.6694 439.402 96.0043C442.106 98.3392 446.745 100.213 453.32 101.626L478.942 106.788C492.705 109.614 502.966 114.161 509.725 120.428C516.484 126.696 519.864 134.929 519.864 145.129C519.864 154.407 517.129 162.548 511.661 169.553C506.254 176.558 498.819 182.026 489.356 185.959C479.956 189.829 469.111 191.765 456.822 191.765C438.081 191.765 423.15 187.863 412.029 180.06C400.969 172.195 394.487 161.504 392.582 147.986L431.2 145.958C432.367 151.673 435.193 156.035 439.679 159.046C444.164 161.995 449.909 163.47 456.914 163.47C463.796 163.47 469.326 162.149 473.504 159.507C477.744 156.803 479.894 153.332 479.956 149.092C479.894 145.528 478.389 142.61 475.439 140.336C472.49 138.001 467.943 136.219 461.799 134.991L437.283 130.106C423.458 127.341 413.166 122.548 406.407 115.728C399.71 108.908 396.361 100.213 396.361 89.6448C396.361 80.5511 398.819 72.717 403.734 66.1425C408.711 59.5679 415.685 54.4988 424.656 50.935C433.688 47.3713 444.256 45.5894 456.361 45.5894C474.241 45.5894 488.312 49.3682 498.573 56.9258C508.896 64.4835 514.917 74.7754 516.638 87.8015ZM583.85 107.156V189H544.587V0.243625H582.744V72.4098H584.403C587.598 64.0534 592.759 57.5096 599.887 52.7784C607.014 47.9857 615.954 45.5894 626.707 45.5894C636.538 45.5894 645.11 47.7399 652.422 52.041C659.795 56.2807 665.509 62.3944 669.564 70.3821C673.681 78.3084 675.709 87.8015 675.647 98.8615V189H636.385V105.866C636.446 97.141 634.234 90.3514 629.749 85.4974C625.325 80.6433 619.119 78.2162 611.131 78.2162C605.785 78.2162 601.054 79.3529 596.937 81.6264C592.882 83.8998 589.687 87.2178 587.352 91.5803C585.079 95.8814 583.911 101.073 583.85 107.156ZM706.546 189V47.4327H744.611V72.1333H746.085C748.666 63.3467 752.998 56.7108 759.081 52.2254C765.164 47.6785 772.168 45.4051 780.095 45.4051C782.061 45.4051 784.181 45.5279 786.454 45.7737C788.728 46.0195 790.725 46.3574 792.445 46.7876V81.6264C790.602 81.0734 788.052 80.5818 784.795 80.1517C781.539 79.7216 778.559 79.5066 775.855 79.5066C770.079 79.5066 764.918 80.7662 760.371 83.2854C755.886 85.7431 752.322 89.184 749.68 93.608C747.099 98.032 745.809 103.132 745.809 108.908V189H706.546ZM870.118 191.765C855.802 191.765 843.421 188.724 832.975 182.641C822.591 176.496 814.573 167.955 808.92 157.018C803.267 146.02 800.44 133.27 800.44 118.769C800.44 104.146 803.267 91.3653 808.92 80.4282C814.573 69.4297 822.591 60.889 832.975 54.806C843.421 48.6616 855.802 45.5894 870.118 45.5894C884.435 45.5894 896.785 48.6616 907.169 54.806C917.614 60.889 925.664 69.4297 931.316 80.4282C936.969 91.3653 939.796 104.146 939.796 118.769C939.796 133.27 936.969 146.02 931.316 157.018C925.664 167.955 917.614 176.496 907.169 182.641C896.785 188.724 884.435 191.765 870.118 191.765ZM870.302 161.35C876.815 161.35 882.253 159.507 886.616 155.82C890.978 152.072 894.266 146.972 896.478 140.521C898.751 134.069 899.888 126.726 899.888 118.493C899.888 110.259 898.751 102.917 896.478 96.4651C894.266 90.0135 890.978 84.9136 886.616 81.1655C882.253 77.4175 876.815 75.5434 870.302 75.5434C863.728 75.5434 858.198 77.4175 853.712 81.1655C849.288 84.9136 845.94 90.0135 843.666 96.4651C841.454 102.917 840.348 110.259 840.348 118.493C840.348 126.726 841.454 134.069 843.666 140.521C845.94 146.972 849.288 152.072 853.712 155.82C858.198 159.507 863.728 161.35 870.302 161.35ZM1029.29 191.765C1014.97 191.765 1002.59 188.724 992.146 182.641C981.762 176.496 973.744 167.955 968.091 157.018C962.438 146.02 959.611 133.27 959.611 118.769C959.611 104.146 962.438 91.3653 968.091 80.4282C973.744 69.4297 981.762 60.889 992.146 54.806C1002.59 48.6616 1014.97 45.5894 1029.29 45.5894C1043.61 45.5894 1055.96 48.6616 1066.34 54.806C1076.79 60.889 1084.83 69.4297 1090.49 80.4282C1096.14 91.3653 1098.97 104.146 1098.97 118.769C1098.97 133.27 1096.14 146.02 1090.49 157.018C1084.83 167.955 1076.79 176.496 1066.34 182.641C1055.96 188.724 1043.61 191.765 1029.29 191.765ZM1029.47 161.35C1035.99 161.35 1041.42 159.507 1045.79 155.82C1050.15 152.072 1053.44 146.972 1055.65 140.521C1057.92 134.069 1059.06 126.726 1059.06 118.493C1059.06 110.259 1057.92 102.917 1055.65 96.4651C1053.44 90.0135 1050.15 84.9136 1045.79 81.1655C1041.42 77.4175 1035.99 75.5434 1029.47 75.5434C1022.9 75.5434 1017.37 77.4175 1012.88 81.1655C1008.46 84.9136 1005.11 90.0135 1002.84 96.4651C1000.63 102.917 999.519 110.259 999.519 118.493C999.519 126.726 1000.63 134.069 1002.84 140.521C1005.11 146.972 1008.46 152.072 1012.88 155.82C1017.37 159.507 1022.9 161.35 1029.47 161.35ZM1124.5 189V47.4327H1161.92V72.4098H1163.58C1166.52 64.1148 1171.44 57.571 1178.32 52.7784C1185.2 47.9857 1193.44 45.5894 1203.02 45.5894C1212.73 45.5894 1220.99 48.0164 1227.82 52.8705C1234.64 57.6632 1239.18 64.1762 1241.46 72.4098H1242.93C1245.82 64.2991 1251.04 57.8168 1258.6 52.9627C1266.22 48.0472 1275.22 45.5894 1285.6 45.5894C1298.81 45.5894 1309.54 49.7983 1317.77 58.2162C1326.06 66.5726 1330.21 78.4313 1330.21 93.7923V189H1291.04V101.534C1291.04 93.6694 1288.95 87.7708 1284.77 83.8384C1280.6 79.9059 1275.37 77.9397 1269.11 77.9397C1261.98 77.9397 1256.42 80.2132 1252.42 84.76C1248.43 89.2454 1246.43 95.1748 1246.43 102.548V189H1208.37V100.705C1208.37 93.7616 1206.37 88.2316 1202.38 84.1149C1198.44 79.9981 1193.25 77.9397 1186.8 77.9397C1182.44 77.9397 1178.51 79.0457 1175 81.2577C1171.56 83.4083 1168.83 86.4497 1166.8 90.3822C1164.77 94.2531 1163.76 98.8 1163.76 104.023V189H1124.5Z" />
              </svg>




            </div>
            <div className={styles.firstSectionBody}>
              <p id='firstContent' className={styles.firstSectionBodyPrice}>$129</p>
              <div className={styles.firstSectionBodyText}>
                <p id='firstContent' className={styles.firstSectionBodyDescription}>Mushroom is a wireless charger, characterized by a simple and essential design, defined by soft and rounded lines.</p>
                <div className={styles.firstSectionButton}>
                  <p>Preorder</p>
                  <FiArrowRight />
                </div>
              </div>
            </div>
          </div>
          <div id='secondSection' className={styles.secondSection}>
            {/* <div className={styles.secondSectionImg}>
              <img src='./img6Pixcleaner1.webp' />
            </div> */}
            <div className={styles.secondSectionAbsolute}>
              <svg id='secondSVG' className={styles.secondSectionAbsoluteSVG} width="1030" height="230" viewBox="0 0 1030 230" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id='secondSVGPath' d="M70.6316 178.765C56.1308 178.765 43.6576 175.693 33.2121 169.548C22.8281 163.343 14.8403 154.74 9.24891 143.742C3.71894 132.743 0.953949 120.086 0.953949 105.769C0.953949 91.2685 3.74966 78.5496 9.34107 67.6125C14.9939 56.614 23.0124 48.0426 33.3965 41.8982C43.7805 35.6923 56.1308 32.5894 70.4473 32.5894C82.7975 32.5894 93.6117 34.8321 102.89 39.3175C112.168 43.8029 119.51 50.101 124.917 58.2116C130.325 66.3222 133.305 75.8461 133.858 86.7831H96.8068C95.7622 79.717 92.9973 74.0335 88.5118 69.7324C84.0879 65.3698 78.2814 63.1886 71.0924 63.1886C65.0095 63.1886 59.6945 64.8476 55.1477 68.1655C50.6623 71.4221 47.1599 76.184 44.6407 82.4513C42.1215 88.7186 40.8619 96.307 40.8619 105.216C40.8619 114.249 42.0908 121.929 44.5486 128.258C47.0678 134.587 50.6008 139.41 55.1477 142.728C59.6945 146.046 65.0095 147.705 71.0924 147.705C75.5778 147.705 79.6024 146.783 83.1662 144.94C86.7914 143.097 89.7714 140.424 92.1063 136.922C94.5026 133.358 96.0695 129.087 96.8068 124.11H133.858C133.243 134.925 130.294 144.448 125.01 152.682C119.787 160.854 112.567 167.244 103.351 171.853C94.134 176.461 83.2276 178.765 70.6316 178.765ZM222.959 178.765C208.643 178.765 196.262 175.724 185.816 169.641C175.432 163.496 167.414 154.955 161.761 144.018C156.108 133.02 153.282 120.27 153.282 105.769C153.282 91.1457 156.108 78.3653 161.761 67.4282C167.414 56.4297 175.432 47.889 185.816 41.806C196.262 35.6616 208.643 32.5894 222.959 32.5894C237.276 32.5894 249.626 35.6616 260.01 41.806C270.456 47.889 278.505 56.4297 284.158 67.4282C289.81 78.3653 292.637 91.1457 292.637 105.769C292.637 120.27 289.81 133.02 284.158 144.018C278.505 154.955 270.456 163.496 260.01 169.641C249.626 175.724 237.276 178.765 222.959 178.765ZM223.144 148.35C229.657 148.35 235.094 146.507 239.457 142.82C243.82 139.072 247.107 133.972 249.319 127.521C251.592 121.069 252.729 113.726 252.729 105.493C252.729 97.2593 251.592 89.9168 249.319 83.4651C247.107 77.0135 243.82 71.9136 239.457 68.1655C235.094 64.4175 229.657 62.5434 223.144 62.5434C216.569 62.5434 211.039 64.4175 206.554 68.1655C202.13 71.9136 198.781 77.0135 196.508 83.4651C194.296 89.9168 193.19 97.2593 193.19 105.493C193.19 113.726 194.296 121.069 196.508 127.521C198.781 133.972 202.13 139.072 206.554 142.82C211.039 146.507 216.569 148.35 223.144 148.35ZM357.43 94.1564V176H318.167V34.4327H355.586V59.4098H357.245C360.379 51.1762 365.633 44.6632 373.006 39.8705C380.379 35.0164 389.319 32.5894 399.826 32.5894C409.657 32.5894 418.229 34.7399 425.541 39.041C432.852 43.3421 438.536 49.4865 442.591 57.4743C446.647 65.4006 448.674 74.863 448.674 85.8615V176H409.412V92.8661C409.473 84.2025 407.261 77.4436 402.776 72.5895C398.29 67.674 392.115 65.2162 384.25 65.2162C378.966 65.2162 374.296 66.3529 370.241 68.6264C366.247 70.8998 363.113 74.2178 360.84 78.5803C358.628 82.8814 357.491 88.0734 357.43 94.1564ZM543.582 178.765C529.082 178.765 516.608 175.693 506.163 169.548C495.779 163.343 487.791 154.74 482.2 143.742C476.67 132.743 473.905 120.086 473.905 105.769C473.905 91.2685 476.7 78.5496 482.292 67.6125C487.945 56.614 495.963 48.0426 506.347 41.8982C516.731 35.6923 529.082 32.5894 543.398 32.5894C555.748 32.5894 566.563 34.8321 575.841 39.3175C585.119 43.8029 592.461 50.101 597.868 58.2116C603.275 66.3222 606.255 75.8461 606.808 86.7831H569.758C568.713 79.717 565.948 74.0335 561.463 69.7324C557.039 65.3698 551.232 63.1886 544.043 63.1886C537.96 63.1886 532.645 64.8476 528.099 68.1655C523.613 71.4221 520.111 76.184 517.592 82.4513C515.072 88.7186 513.813 96.307 513.813 105.216C513.813 114.249 515.042 121.929 517.499 128.258C520.019 134.587 523.552 139.41 528.099 142.728C532.645 146.046 537.96 147.705 544.043 147.705C548.529 147.705 552.553 146.783 556.117 144.94C559.742 143.097 562.722 140.424 565.057 136.922C567.453 133.358 569.02 129.087 569.758 124.11H606.808C606.194 134.925 603.245 144.448 597.96 152.682C592.738 160.854 585.518 167.244 576.301 171.853C567.085 176.461 556.178 178.765 543.582 178.765ZM696.463 178.765C681.901 178.765 669.366 175.816 658.859 169.917C648.414 163.957 640.365 155.539 634.712 144.663C629.059 133.726 626.232 120.792 626.232 105.862C626.232 91.2993 629.059 78.5189 634.712 67.5204C640.365 56.5219 648.322 47.9504 658.583 41.806C668.905 35.6616 681.01 32.5894 694.896 32.5894C704.236 32.5894 712.93 34.0948 720.979 37.1055C729.09 40.0549 736.156 44.5096 742.178 50.4696C748.261 56.4297 752.992 63.9259 756.371 72.9582C759.751 81.929 761.44 92.436 761.44 104.479V115.262H641.901V90.9306H724.482C724.482 85.2777 723.253 80.27 720.795 75.9075C718.337 71.545 714.927 68.1348 710.565 65.6771C706.263 63.1579 701.256 61.8982 695.541 61.8982C689.581 61.8982 684.297 63.2807 679.689 66.0457C675.142 68.7493 671.578 72.4052 668.998 77.0135C666.417 81.5604 665.096 86.6295 665.034 92.2209V115.355C665.034 122.359 666.325 128.412 668.905 133.511C671.548 138.611 675.265 142.544 680.058 145.309C684.85 148.074 690.534 149.456 697.108 149.456C701.471 149.456 705.465 148.842 709.09 147.613C712.715 146.384 715.818 144.541 718.399 142.083C720.979 139.625 722.946 136.614 724.297 133.051L760.611 135.447C758.767 144.172 754.989 151.791 749.274 158.304C743.621 164.756 736.31 169.794 727.339 173.419C718.429 176.983 708.137 178.765 696.463 178.765ZM787.062 229.088V34.4327H825.772V58.2116H827.523C829.244 54.4021 831.732 50.5311 834.989 46.5987C838.307 42.6048 842.608 39.2868 847.892 36.6447C853.238 33.9412 859.874 32.5894 867.8 32.5894C878.123 32.5894 887.647 35.2929 896.372 40.7C905.097 46.0457 912.071 54.1256 917.293 64.9397C922.516 75.6925 925.127 89.1794 925.127 105.401C925.127 121.192 922.578 134.525 917.478 145.401C912.439 156.215 905.557 164.418 896.832 170.009C888.169 175.539 878.461 178.304 867.708 178.304C860.089 178.304 853.606 177.045 848.261 174.525C842.977 172.006 838.645 168.842 835.265 165.032C831.886 161.161 829.305 157.26 827.523 153.327H826.325V229.088H787.062ZM825.496 105.216C825.496 113.634 826.663 120.977 828.998 127.244C831.333 133.511 834.712 138.396 839.136 141.899C843.56 145.339 848.937 147.06 855.265 147.06C861.656 147.06 867.063 145.309 871.487 141.806C875.911 138.243 879.259 133.327 881.533 127.06C883.868 120.731 885.035 113.45 885.035 105.216C885.035 97.0443 883.898 89.8553 881.625 83.6495C879.352 77.4436 876.003 72.5895 871.579 69.0872C867.155 65.5849 861.717 63.8337 855.265 63.8337C848.875 63.8337 843.468 65.5234 839.044 68.9029C834.682 72.2823 831.333 77.0749 828.998 83.2808C826.663 89.4867 825.496 96.7985 825.496 105.216ZM1026.6 34.4327V63.9259H941.349V34.4327H1026.6ZM960.704 0.51556H999.966V132.498C999.966 136.123 1000.52 138.949 1001.63 140.977C1002.73 142.943 1004.27 144.326 1006.23 145.124C1008.26 145.923 1010.6 146.322 1013.24 146.322C1015.08 146.322 1016.92 146.169 1018.77 145.862C1020.61 145.493 1022.02 145.216 1023.01 145.032L1029.18 174.249C1027.22 174.863 1024.45 175.57 1020.89 176.369C1017.32 177.229 1012.99 177.751 1007.89 177.935C998.43 178.304 990.135 177.045 983.008 174.157C975.942 171.269 970.443 166.783 966.51 160.7C962.578 154.617 960.642 146.937 960.704 137.659V0.51556Z" />
              </svg>

            </div>
            <div id='secondContent' className={styles.secondSectionContent}>
              <p>The project intends to create a product that stands out by its shape, finding a perfect balance between meaning and function.</p>
              <p>The object is inspired by the shape of the mushroom, reinterpreted and adapted to respond to aesthetic and functional needs while maintaining its peculiar form intact.</p>
            </div>
          </div>
          <div id='thirdSection' className={styles.thirdSection}>
            <div className={styles.thirdSectionFirstHalf}>
              <div className={styles.thirdSectionContent}>
                <p>Mushroom charger has a 15W transmitter coil, a number of station packs with a lot of power going into its quirky frame.</p>
                <p>With the charge power comparable to wired charges, Mushroom is an excellent choice for both routine charging throughout the day and overnight marathon charging.</p>
                <div className={styles.firstSectionButton}>
                  <p>Preorder</p>
                  <FiArrowRight />
                </div>
              </div>
              <div className={styles.thirdSectionFooter}>
                <p>Specs</p>
                <div className={styles.thirdSectionFooterContent}>
                  <div id='thirdList'>
                    <p>Up to 15W wireless power output</p>
                    <p>LED wireless charging indicator</p>
                  </div>
                  <div id='thirdList'>
                    <p>Power adaptor cord length: 1.5m</p>
                    <p>Magnetic padded leather surface</p>
                  </div>
                  <div id='thirdList'>
                    <p>USB-C power input</p>
                  </div>
                </div>
              </div>
            </div>
            <div id='thirdImg'>
              <img src='./img4Pixcleaner.webp' />
            </div>
          </div>
          <div id='fourthSection' className={styles.fourthSection}>
            <div id='fourthImg'>

              <img src='./img2.jpg' />
            </div>
            <div id='fourthImg'>

              <img src='./img1.webp' />
            </div>
            <div id='fourthImg'>

              <img src='./img3.jpg' />
            </div>
          </div>
          <div id='fifthSection' className={styles.fifthSection}>
            <div className={styles.fifthSectionContainer}>
              <div className={styles.fifthSectionAbsolute}>
                <svg className={styles.fifthSectionAbsoluteSVG} width="1085" height="243" viewBox="0 0 1085 243" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.668254 242.088V47.4327H39.3781V71.2116H41.1292C42.8497 67.4021 45.3381 63.5311 48.5947 59.5987C51.9127 55.6048 56.2137 52.2868 61.4979 49.6447C66.8436 46.9412 73.4796 45.5894 81.4058 45.5894C91.7285 45.5894 101.252 48.2929 109.977 53.7C118.702 59.0457 125.676 67.1256 130.899 77.9397C136.122 88.6925 138.733 102.179 138.733 118.401C138.733 134.192 136.183 147.525 131.083 158.401C126.045 169.215 119.163 177.418 110.438 183.009C101.775 188.539 92.0664 191.304 81.3137 191.304C73.6946 191.304 67.2122 190.045 61.8666 187.525C56.5824 185.006 52.2506 181.842 48.8712 178.032C45.4917 174.161 42.9111 170.26 41.1292 166.327H39.9311V242.088H0.668254ZM39.1016 118.216C39.1016 126.634 40.269 133.977 42.6039 140.244C44.9388 146.511 48.3182 151.396 52.7422 154.899C57.1661 158.339 62.5425 160.06 68.8712 160.06C75.2614 160.06 80.6685 158.309 85.0925 154.806C89.5165 151.243 92.8652 146.327 95.1386 140.06C97.4735 133.731 98.6409 126.45 98.6409 118.216C98.6409 110.044 97.5042 102.855 95.2308 96.6495C92.9573 90.4436 89.6086 85.5895 85.1847 82.0872C80.7607 78.5849 75.3229 76.8337 68.8712 76.8337C62.481 76.8337 57.074 78.5234 52.65 81.9029C48.2875 85.2823 44.9388 90.0749 42.6039 96.2808C40.269 102.487 39.1016 109.799 39.1016 118.216ZM164.908 189V47.4327H202.973V72.1333H204.448C207.028 63.3467 211.36 56.7108 217.443 52.2254C223.526 47.6785 230.531 45.4051 238.457 45.4051C240.423 45.4051 242.543 45.5279 244.817 45.7737C247.09 46.0195 249.087 46.3574 250.807 46.7876V81.6264C248.964 81.0734 246.414 80.5818 243.158 80.1517C239.901 79.7216 236.921 79.5066 234.217 79.5066C228.442 79.5066 223.28 80.7662 218.733 83.2854C214.248 85.7431 210.684 89.184 208.042 93.608C205.462 98.032 204.171 103.132 204.171 108.908V189H164.908ZM329.033 191.765C314.471 191.765 301.937 188.816 291.43 182.917C280.984 176.957 272.935 168.539 267.282 157.663C261.629 146.726 258.803 133.792 258.803 118.862C258.803 104.299 261.629 91.5189 267.282 80.5204C272.935 69.5219 280.892 60.9504 291.153 54.806C301.476 48.6616 313.58 45.5894 327.467 45.5894C336.806 45.5894 345.5 47.0948 353.55 50.1055C361.66 53.0549 368.726 57.5096 374.748 63.4696C380.831 69.4297 385.562 76.9259 388.941 85.9582C392.321 94.929 394.011 105.436 394.011 117.479V128.262H274.471V103.931H357.052C357.052 98.2777 355.823 93.27 353.365 88.9075C350.907 84.545 347.497 81.1348 343.135 78.6771C338.834 76.1579 333.826 74.8982 328.112 74.8982C322.152 74.8982 316.867 76.2807 312.259 79.0457C307.712 81.7493 304.149 85.4052 301.568 90.0135C298.987 94.5604 297.666 99.6295 297.605 105.221V128.355C297.605 135.359 298.895 141.412 301.476 146.511C304.118 151.611 307.835 155.544 312.628 158.309C317.42 161.074 323.104 162.456 329.679 162.456C334.041 162.456 338.035 161.842 341.66 160.613C345.285 159.384 348.388 157.541 350.969 155.083C353.55 152.625 355.516 149.614 356.868 146.051L393.181 148.447C391.338 157.172 387.559 164.791 381.845 171.304C376.192 177.756 368.88 182.794 359.909 186.419C351 189.983 340.708 191.765 329.033 191.765ZM483.596 191.765C469.28 191.765 456.899 188.724 446.453 182.641C436.069 176.496 428.051 167.955 422.398 157.018C416.745 146.02 413.918 133.27 413.918 118.769C413.918 104.146 416.745 91.3653 422.398 80.4282C428.051 69.4297 436.069 60.889 446.453 54.806C456.899 48.6616 469.28 45.5894 483.596 45.5894C497.913 45.5894 510.263 48.6616 520.647 54.806C531.092 60.889 539.142 69.4297 544.794 80.4282C550.447 91.3653 553.274 104.146 553.274 118.769C553.274 133.27 550.447 146.02 544.794 157.018C539.142 167.955 531.092 176.496 520.647 182.641C510.263 188.724 497.913 191.765 483.596 191.765ZM483.78 161.35C490.293 161.35 495.731 159.507 500.094 155.82C504.456 152.072 507.744 146.972 509.956 140.521C512.229 134.069 513.366 126.726 513.366 118.493C513.366 110.259 512.229 102.917 509.956 96.4651C507.744 90.0135 504.456 84.9136 500.094 81.1655C495.731 77.4175 490.293 75.5434 483.78 75.5434C477.206 75.5434 471.676 77.4175 467.19 81.1655C462.767 84.9136 459.418 90.0135 457.144 96.4651C454.932 102.917 453.826 110.259 453.826 118.493C453.826 126.726 454.932 134.069 457.144 140.521C459.418 146.972 462.767 152.072 467.19 155.82C471.676 159.507 477.206 161.35 483.78 161.35ZM578.804 189V47.4327H616.868V72.1333H618.343C620.924 63.3467 625.256 56.7108 631.338 52.2254C637.421 47.6785 644.426 45.4051 652.352 45.4051C654.319 45.4051 656.438 45.5279 658.712 45.7737C660.985 46.0195 662.982 46.3574 664.703 46.7876V81.6264C662.859 81.0734 660.309 80.5818 657.053 80.1517C653.796 79.7216 650.816 79.5066 648.113 79.5066C642.337 79.5066 637.176 80.7662 632.629 83.2854C628.143 85.7431 624.58 89.184 621.938 93.608C619.357 98.032 618.067 103.132 618.067 108.908V189H578.804ZM730.578 191.304C719.826 191.304 710.087 188.539 701.362 183.009C692.698 177.418 685.816 169.215 680.717 158.401C675.678 147.525 673.159 134.192 673.159 118.401C673.159 102.179 675.77 88.6925 680.993 77.9397C686.216 67.1256 693.159 59.0457 701.823 53.7C710.548 48.2929 720.102 45.5894 730.486 45.5894C738.413 45.5894 745.018 46.9412 750.302 49.6447C755.648 52.2868 759.949 55.6048 763.205 59.5987C766.523 63.5311 769.042 67.4021 770.763 71.2116H771.961V0.243625H811.132V189H772.422V166.327H770.763C768.92 170.26 766.308 174.161 762.929 178.032C759.611 181.842 755.279 185.006 749.933 187.525C744.649 190.045 738.198 191.304 730.578 191.304ZM743.021 160.06C749.35 160.06 754.695 158.339 759.058 154.899C763.482 151.396 766.861 146.511 769.196 140.244C771.592 133.977 772.791 126.634 772.791 118.216C772.791 109.799 771.623 102.487 769.288 96.2808C766.953 90.0749 763.574 85.2823 759.15 81.9029C754.726 78.5234 749.35 76.8337 743.021 76.8337C736.569 76.8337 731.131 78.5849 726.707 82.0872C722.284 85.5895 718.935 90.4436 716.661 96.6495C714.388 102.855 713.251 110.044 713.251 118.216C713.251 126.45 714.388 133.731 716.661 140.06C718.996 146.327 722.345 151.243 726.707 154.806C731.131 158.309 736.569 160.06 743.021 160.06ZM907.929 191.765C893.367 191.765 880.832 188.816 870.325 182.917C859.88 176.957 851.831 168.539 846.178 157.663C840.525 146.726 837.699 133.792 837.699 118.862C837.699 104.299 840.525 91.5189 846.178 80.5204C851.831 69.5219 859.788 60.9504 870.049 54.806C880.372 48.6616 892.476 45.5894 906.362 45.5894C915.702 45.5894 924.396 47.0948 932.445 50.1055C940.556 53.0549 947.622 57.5096 953.644 63.4696C959.727 69.4297 964.458 76.9259 967.837 85.9582C971.217 94.929 972.906 105.436 972.906 117.479V128.262H853.367V103.931H935.948C935.948 98.2777 934.719 93.27 932.261 88.9075C929.803 84.545 926.393 81.1348 922.031 78.6771C917.73 76.1579 912.722 74.8982 907.008 74.8982C901.047 74.8982 895.763 76.2807 891.155 79.0457C886.608 81.7493 883.044 85.4052 880.464 90.0135C877.883 94.5604 876.562 99.6295 876.501 105.221V128.355C876.501 135.359 877.791 141.412 880.372 146.511C883.014 151.611 886.731 155.544 891.524 158.309C896.316 161.074 902 162.456 908.574 162.456C912.937 162.456 916.931 161.842 920.556 160.613C924.181 159.384 927.284 157.541 929.865 155.083C932.445 152.625 934.412 149.614 935.763 146.051L972.077 148.447C970.234 157.172 966.455 164.791 960.74 171.304C955.088 177.756 947.776 182.794 938.805 186.419C929.895 189.983 919.604 191.765 907.929 191.765ZM998.529 189V47.4327H1036.59V72.1333H1038.07C1040.65 63.3467 1044.98 56.7108 1051.06 52.2254C1057.15 47.6785 1064.15 45.4051 1072.08 45.4051C1074.04 45.4051 1076.16 45.5279 1078.44 45.7737C1080.71 46.0195 1082.71 46.3574 1084.43 46.7876V81.6264C1082.58 81.0734 1080.03 80.5818 1076.78 80.1517C1073.52 79.7216 1070.54 79.5066 1067.84 79.5066C1062.06 79.5066 1056.9 80.7662 1052.35 83.2854C1047.87 85.7431 1044.3 89.184 1041.66 93.608C1039.08 98.032 1037.79 103.132 1037.79 108.908V189H998.529Z" />
                </svg>

              </div>
              <div className={styles.fifthSectionContent}>
                <p>Preorder now on Kickstarter for $<span id='fifthText'>130</span></p>
                <div className={styles.firstSectionButton}>
                  <p>Preorder</p>
                  <FiArrowRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
