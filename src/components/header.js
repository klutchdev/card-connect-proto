import React from "react";
import { useStaticQuery, graphql } from "gatsby";
// import Image from "./image";
import '../styling/header.scss';

const Header = () => {

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const svgIcon =
    <svg viewBox="0 0 280 180" xmlns="http://www.w3.org/2000/svg" >
    <defs>
      <path id="home-security-a" d="M.3648.3455h69.3433v53.3377H.3648z"/>
    </defs>
    <g fill="none" fillRule="evenodd">
      <path d="M237.3966 168.1001H37.8606c-4.228 0-7.424-3.7682-7.1032-8.3481l7.7712-111.005c.2736-3.9156 3.6712-7.103 7.5504-7.103h183.0992c3.8792 0 7.2768 3.1874 7.5512 7.103l7.7696 111.005c.3208 4.5799-2.8744 8.3481-7.1024 8.3481" fill="#FBFCFE"/>
      <path d="M33.192 129.8103l5.7703-82.4294c.2744-3.9157 3.6712-7.103 7.5512-7.103H229.612c3.88 0 7.2768 3.1873 7.5512 7.103l2.664 38.0654M186.7766 166.7332H38.2942c-4.228 0-7.4232-3.7674-7.1024-8.3473" stroke="#46587F" strokeWidth="2.1536" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M62.2942 83.094c1.5352-.1433 3.0528-.1642 4.5376-.0632.816.0553 1.6592.1626 2.2392.6754.0736.065.1464.1459.1432.2596-.004.1555-.1464.2965-.2784.3975-1.1032.8437-2.6672 1.0872-3.312 2.3556 1.016.0761 2.032.153 3.0488.23.2576.0192.5232.0408.7296.1746.6672.4327.3352 1.637.004 2.5728-.4624 1.3028-.8232 2.6778-.716 3.9582.108 1.2884.7728 2.4638 1.8968 2.7482.8016.2035 1.816-.0232 2.3808.5777.6184.657.3584 1.9126.188 2.9919-.1728 1.1-.1912 2.2915.3792 3.0487.5728.7604 1.9168.7628 2.5344-.2284.5664-.9086.2304-1.9638.1144-2.9229-.1456-1.2083.124-2.5536.7424-3.7186.1264-.2387.2784-.4823.4936-.6193.216-.1362.4576-.1434.6856-.1434 1.8296.0024 3.6312.1834 5.3792.5424 1.0704.2203 2.2384.4896 3.3072-.1322-1.3792.5649-2.736 1.2756-4.0456 2.1233-.3248.21-.6776.4695-.8016.8573-.1896.5961.272 1.105.196 1.7147-.0656.5216-.524.9695-.9824 1.1305-.4592.161-.9184.1002-1.36.0377-.384.7531.248 1.4398.8344 1.7811.588.3438 1.2784.9199 1 1.7251l-1.9208.1298c-.3248.0217-.6896.0633-.9488.3454-.2128.2315-.2944.5616-.408.8613-.4424 1.1714-1.5728 2.0784-2.6104 2.0904-1.044.0128-1.836-.7684-2.828-.9607-2.1048-.4086-4.408 1.8373-6.6848 2.346-1.2592.2805-2.4464.0113-3.596-.2571-.276-.0641-.5592-.1322-.7688-.3181-.5104-.4543-.456-1.4791-.9896-1.8925-.4912-.3806-1.2648-.0978-1.9392.1714-1.1944.4776-2.7112.782-3.1568-.3149-.1792-.4415-.1224-1.0184-.2672-1.4807-.252-.8084-1.052-1.1185-1.5168-1.7483-1.1584-1.5696.0264-4.4693-.4416-6.5005-.0632-.274-.1976-.5616-.472-.5544-.3216.0088-.612.407-.9392.5657-.6928.338-1.1016-.5857-.832-1.3501.268-.7596.8816-1.3926 1.2704-2.113.136-.2523.2464-.5448.176-.7683-.06-.189-.2344-.2836-.3288-.4463-.256-.4415.18-1.1995.6976-1.5528.5168-.3533 1.092-.4583 1.6368-.7035 3.0536-1.3773 4.0112-6.3322 6.9896-7.675" fill="#DEE6F7"/>
      <path d="M224.211 106.0508c.824.0721 1.3448-.2436.232-.955-.0072-.0049-.0088-.0121-.0152-.0161-6.1576-3.8412-12.2576-9.4627-18.424-12.4056-5.6592-2.7002-11.7552-3.1914-16.8928-1.3694-5.2616 1.8661-10.2056 6.1456-16.0488 4.4942-5.62-1.5873-9.1168-7.8714-12.0048-13.2477-2.7984-5.209-6.5192-10.7487-11.7856-11.2871-4.0744-.4167-7.7424 2.3532-11.7736 3.2186-7.0232 1.5063-13.7656-2.9085-18.7056-7.849-4.7928-4.793-8.8232-10.34-14.6696-13.0883-10.6864-5.0238-25.2232.4856-36.4088-3.0792l-.4048 1.6145c1.0168 1.572 2.9616 2.463 5.0928 2.326-.1656 2.0905-2.8368 3.6152-5.0056 3.919-2.1728.3036-4.3824.0031-6.4904 1.0648-1.6208.814-2.9016 2.302-4.3736 3.4806-3.7816 3.0327-8.9552 3.7882-12.096 1.7547.0296 4.8852.028 10.0996-2.0664 15.5152 6.7704-1.7988 12.384-7.9355 17.9968-12.6227 5.4528-4.5535 13.092-8.1423 17.608-4.7802-5.528 2.5175-10.5368 7.3594-13.5144 13.1828 4.6928-1.77 9.48-3.5455 14.04-3.4221 4.5624.1234 9.0256 2.636 9.9976 7.3017.6456 3.1-.1896 7.0421 1.7336 9.4234 2.1016 2.6008 6.3616 1.8653 8.8496 4.1104 2.8456 2.5672 2.3488 7.796 1.9096 12.3768-.4496 4.6792-.5904 9.586.6088 14.0994 1.2288 4.6256 4.0552 8.7784 8.0576 10.0324 7.4952 2.3492 14.752-5.6303 19.7952-12.8311 4.8544-6.9323 10.5552-14.5225 17.8376-13.888 3.9664.3454 7.536 3.1257 11.172 5.3868 12.4352 7.732 27.3072 9.675 39.7496 5.108 5.448-1.9992 10.3032-5.1529 15.8088-6.6576 3.2016-.875 6.6384-1.1674 10.1864-.903l.004-.0072z" fill="#DEE6F7"/>
      <path d="M154.5517 69.3736h27.1176M155.3196 72.9401h17.904" stroke="#46587F" strokeWidth="1.8376" strokeLinecap="round" strokeLinejoin="round" strokeDasharray=".548 2.2968"/>
      <path d="M76.79 109.9255H54.9362c-3.2296 0-5.5256-3.0864-5.1064-6.8241l1.5168-13.5106c.4008-3.5735 3.2776-6.4732 6.396-6.4732H78.846c3.1184 0 5.4688 2.8997 5.2216 6.4732l-.9344 13.5106c-.2584 3.7377-3.1136 6.8241-6.3432 6.8241zM95.9177 92.5963c.9728.7252 1.5624 1.8365 1.4984 3.0856-.064 1.2524-.772 2.3741-1.8288 3.1096M100.1415 90.9492c1.144 1.2764 1.7936 2.9246 1.7104 4.7322-.0832 1.8012-.88 3.4613-2.1424 4.7601M104.361 89.4579c1.3352 1.745 2.0776 3.8916 1.9816 6.224-.0976 2.362-1.0392 4.5615-2.5648 6.3627M108.4802 87.994c1.5728 2.1833 2.4448 4.8242 2.34 7.6878-.1056 2.8845-1.1864 5.5847-2.9608 7.8458" stroke="#46587F" strokeWidth="2.1536" strokeLinecap="round" strokeLinejoin="round"/>
      <path stroke="#46587F" strokeWidth="2.1536" strokeLinecap="round" strokeLinejoin="round" d="M64.6806 87.019l-.0968 1.0672H60.427l-1.6952 17.2516h11.8976l.2408-2.9069h7.5888M79.2888 91.0697h-7.06l.2424-2.9445h-3.2944M71.6326 98.3114l.2672-3.2474"/>
      <path d="M229.4392 70.9448c.2048 5.3659-4.752 9.441-11.068 9.0316-6.3104-.4079-11.4536-5.1288-11.4952-10.473-.0408-5.269 4.9048-9.171 11.052-8.7833 6.1544.3886 11.3096 4.9357 11.5112 10.2247" fill="#FFF"/>
      <path d="M203.5486 71.5465c-.0096-2.8636 1.4408-5.3234 3.7384-6.9171-1.9832-1.6081-4.5768-2.6714-7.4136-2.85-6.1464-.3894-11.1968 3.5238-11.2864 8.808-.0904 5.3603 4.944 10.0949 11.2528 10.5043 2.912.1891 5.5632-.5825 7.568-2.0015-2.3616-1.9526-3.8496-4.6576-3.8592-7.5437" fill="#DEE6F7"/>
      <path d="M204.4395 79.5542c-1.1688.2748-2.4248.3838-3.7328.2989-6.2992-.4087-11.3312-5.1272-11.2464-10.4707.0832-5.2673 5.12-9.1678 11.2576-8.78a13.4568 13.4568 0 0 1 3.0288.5433M215.4926 61.5357c6.1592.3894 11.3048 4.9469 11.4896 10.2479.1872 5.378-4.7888 9.4627-11.1112 9.0524a13.6135 13.6135 0 0 1-3.4072-.665" stroke="#46587F" strokeWidth="2.1536" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M209.8946 79.0042c-1.992-1.1755-3.584-2.826-4.532-4.7242-.6152-1.2315-.9584-2.5664-.964-3.9413-.0192-4.196 3.1104-7.5253 7.4712-8.522" stroke="#46587F" strokeWidth="1.8376" strokeLinecap="round" strokeLinejoin="round" strokeDasharray=".548 2.2968"/>
      <path d="M48.3982 118.7252l-.012 1.8076c.6016-.1779 1.1472-.2668 1.6368-.2668.9952 0 1.8208.3189 2.476.9566.656.6378.9816 1.4623.9768 2.4735-.004 1.0416-.3416 1.8597-1.012 2.4534-.672.5945-1.6976.891-3.076.891-1.216 0-2.1752-.2172-2.88-.649-.4096-.2484-.6136-.5345-.6113-.8566.0017-.2043.0833-.3822.2457-.5328.1624-.1514.3544-.2267.576-.2267.1848 0 .384.0825.6.2483.2144.1667.4416.282.6784.347.3368.0937.7696.1418 1.2976.1418.9824 0 1.6536-.1482 2.0144-.4439.36-.2948.5416-.7475.5448-1.3581.0032-.5985-.1664-1.0697-.5104-1.411-.3432-.343-.7864-.5128-1.3288-.5128-.5848 0-1.2536.1787-2.004.5344-.1696.0842-.3176.1266-.444.1266-.232 0-.4248-.0793-.58-.2371-.1536-.1595-.2296-.3638-.228-.617l.0336-4.3844h4.9456c.3896 0 .6664.0705.8312.2108.1648.141.2472.3245.2464.5512-.0016.222-.0848.4038-.2512.5432-.1664.141-.4448.2108-.8336.2108h-3.332zM60.2106 123.153l.004-3.7393-2.3536 3.7394h2.3496zm1.624-5.9435l-.0024 5.9436c.3432 0 .596.0705.76.2123.1632.141.2448.3237.2448.5457 0 .2235-.0824.4078-.2488.5512-.1664.1434-.4184.2155-.7568.2155v.6114c.3432 0 .5968.0713.7608.2163.1632.1434.2456.3277.2456.5505 0 .2235-.0832.4062-.2496.548-.1664.1418-.4456.2124-.836.2124h-2.18c-.3912 0-.6696-.0706-.8352-.2124-.1664-.1418-.2496-.3277-.2488-.5552.0008-.2244.084-.407.2504-.5473.1672-.1418.4456-.2123.836-.2123h.6336l.0008-.6114h-4.4096l.004-1.2723 3.8936-6.196h2.1376zM69.9822 116.9661l.0304 8.3233h1.6384c.3912 0 .6696.0705.8368.2116.1672.141.2512.3269.2528.5552.0008.2236-.0816.4063-.2472.5473-.1656.1426-.4448.2131-.8352.2131h-4.9056c-.3912 0-.6696-.0705-.8368-.2131-.1664-.141-.2496-.327-.2504-.5545 0-.2243.0832-.407.2488-.548.1664-.141.4448-.2116.8352-.2116h1.6392l-.0176-6.349-1.444.355c-.2312.0592-.4048.0889-.5208.0889-.2056 0-.3832-.0761-.5336-.2292-.1504-.153-.2256-.3405-.2256-.5633-.0008-.2019.0544-.3605.1648-.4767.1104-.1162.3416-.218.6936-.3069l3.4768-.842zM77.4005 125.2892h3.556c.1936-.1498.3776-.2236.552-.2236.248 0 .4456.0762.592.2308.1472.1538.2216.4166.2256.7892l.0072.7308h-7.4024l-.0096-1.617c2.908-2.2659 4.6608-3.7217 5.2608-4.37.3024-.3308.452-.645.4504-.9414-.0032-.3702-.1792-.697-.5264-.9815-.3464-.2828-.8064-.4255-1.3808-.4255-.5784 0-1.0584.1587-1.4408.4744-.1992.1682-.3576.4166-.476.7475-.0728.2076-.1736.3566-.3016.444-.1288.0889-.2872.1337-.4768.1337-.2216 0-.4128-.0745-.5744-.2211-.1616-.149-.2424-.3221-.244-.52-.0016-.2965.1416-.6659.4312-1.1105.2896-.4431.7128-.798 1.2712-1.0649.5584-.266 1.1664-.3982 1.8232-.3982 1.02 0 1.8584.2892 2.516.8685s.9912 1.2812.9984 2.1057c.004.4207-.0856.8085-.2688 1.1674-.184.359-.6288.855-1.3352 1.4887-.5544.5-1.6368 1.3974-3.2472 2.693M99.9388 118.7252h-3.7024c-.016.2964-.0944.5104-.2344.641-.14.1306-.3256.1963-.5576.1963-.2424 0-.4392-.077-.592-.23-.152-.1538-.2312-.4118-.2368-.7772l-.0208-1.346h7.0208l.028 1.5159-2.4912 7.3378c-.1056.3084-.2256.5135-.3584.6153-.1328.1026-.2944.153-.4848.153-.2264 0-.4224-.0745-.5864-.2235-.1632-.1498-.2464-.3205-.2496-.5152-.0016-.1082.0376-.282.1176-.5208l2.348-6.8466zM106.6091 118.7252l.0384 1.8076c.5968-.1779 1.14-.2668 1.6296-.2668.9952 0 1.8296.3189 2.5024.9566.6744.6378 1.0232 1.4623 1.0472 2.4735.0248 1.0416-.2896 1.8597-.944 2.4534-.6552.5945-1.672.891-3.0504.891-1.216 0-2.1816-.2172-2.8984-.649-.4168-.2484-.6288-.5345-.6352-.8566-.004-.2043.0728-.3822.2304-.5328.1584-.1514.348-.2267.5696-.2267.1848 0 .3872.0825.6072.2483.22.1667.4496.282.688.347.34.0937.7736.1418 1.3016.1418.9824 0 1.6496-.1482 2.0016-.4439.3528-.2948.5216-.7475.508-1.3581-.0136-.5985-.1976-1.0697-.5504-1.411-.3536-.343-.8008-.5128-1.344-.5128-.5848 0-1.248.1787-1.9888.5344-.1672.0842-.3136.1266-.44.1266-.232 0-.4272-.0793-.5864-.2371-.1584-.1595-.2408-.3638-.2456-.617l-.0904-4.3844h4.9464c.3888 0 .668.0705.8368.2108.1688.141.256.3245.2616.5512.0048.222-.0736.4038-.236.5432-.1624.141-.4384.2108-.8272.2108h-3.332zM118.45 116.9661l.2249 8.3233h1.6392c.3904 0 .6712.0705.8416.2116.1704.141.2584.3269.2648.5552.0064.2236-.0712.4063-.2336.5473-.1624.1426-.4392.2131-.8304.2131h-4.9056c-.3912 0-.6712-.0705-.8416-.2131-.1696-.141-.2576-.327-.2632-.5545-.0056-.2243.0728-.407.236-.548.1624-.141.4392-.2116.8304-.2116h1.6384l-.1664-6.349-1.4352.355c-.2304.0592-.4032.0889-.5184.0889-.2056 0-.3848-.0761-.5392-.2292-.1536-.153-.2336-.3405-.2392-.5633-.0048-.2019.0464-.3605.1536-.4767.108-.1162.3368-.218.6872-.3069l3.4568-.842zM126.0634 125.2892h3.5552c.1912-.1498.3736-.2236.5472-.2236.248 0 .4472.0762.5976.2308.1504.1538.232.4166.244.7892l.024.7308h-7.4016l-.048-1.617c2.8552-2.2659 4.5736-3.7217 5.1584-4.37.2952-.3308.4376-.645.428-.9414-.012-.3702-.1944-.697-.5488-.9815-.3536-.2828-.8168-.4255-1.3904-.4255-.5792 0-1.0552.1587-1.4304.4744-.1944.1682-.348.4166-.4584.7475-.068.2076-.1648.3566-.2912.444-.1264.0889-.284.1337-.4736.1337-.2216 0-.4144-.0745-.5792-.2211-.1656-.149-.2504-.3221-.256-.52-.0096-.2965.1256-.6659.4048-1.1105.2792-.4431.6944-.798 1.2464-1.0649.552-.266 1.1568-.3982 1.8144-.3982 1.02 0 1.8648.2892 2.536.8685s1.0208 1.2812 1.048 2.1057c.0136.4207-.0672.8085-.2424 1.1674-.1752.359-.6088.855-1.3 1.4887-.5432.5-1.604 1.3974-3.184 2.693M149.2122 121.7204c.492.3069.8664.6618 1.12 1.0648.2544.4039.392.8558.4136 1.3565.0232.5417-.1128 1.0408-.408 1.5008-.2944.4599-.7352.8068-1.3224 1.0432-.5872.2363-1.3648.355-2.3312.355-1.2576 0-2.2104-.1844-2.8592-.553-.3624-.2083-.5488-.4566-.56-.7443-.008-.2195.0624-.4038.2128-.5552.1496-.1515.3352-.2268.5568-.2268.1528 0 .3128.0489.4808.1482.2384.149.4616.2484.6688.2989.32.0689.7568.1034 1.3112.1034.9456 0 1.624-.1154 2.0368-.3454.4128-.2315.6104-.5584.5928-.9799-.0128-.3125-.148-.613-.4056-.9038-.2568-.2892-.5944-.5136-1.012-.6722-.2416-.089-.6448-.1507-1.2104-.1851-.2688-.016-.4792-.093-.6296-.234-.1512-.141-.2304-.3157-.2384-.5232-.0088-.218.0632-.4006.2152-.5497.152-.1482.3488-.2219.5912-.2219.5376 0 .8248-.0032.8608-.008.2104-.0192.4184-.0841.6248-.1923.2064-.109.3696-.2588.4912-.4487.1208-.1899.1776-.3862.1688-.589-.0136-.3212-.176-.5984-.488-.8324-.3128-.2348-.7712-.3526-1.3768-.3526-.7784 0-1.3648.2124-1.7584.6362-.116.1234-.2104.2027-.2824.2372-.1088.0545-.2312.0825-.368.0825-.2216 0-.4136-.0745-.5776-.2235-.1632-.1474-.2496-.3301-.2576-.5473-.0136-.3397.2152-.6706.6872-.9911.6864-.468 1.5568-.7019 2.6144-.7019.9992 0 1.812.266 2.4384.798.628.5329.9576 1.173.9888 1.9246.0168.3894-.0568.754-.2224 1.0921-.1648.3397-.42.6522-.7664.9399M157.436 123.153l-.1704-3.7393-2.1792 3.7394h2.3496zm1.3456-5.9435l.276 5.9436c.3432 0 .5992.0705.7696.2123.1704.141.26.3237.2712.5457.0104.2235-.064.4078-.224.5512-.1592.1434-.408.2155-.7456.2155l.028.6114c.3432 0 .6.0713.7704.2163.1704.1434.2608.3277.272.5505.0104.2235-.064.4062-.224.548-.16.1418-.436.2124-.8264.2124h-2.1792c-.3912 0-.6728-.0706-.8456-.2124-.1728-.1418-.2648-.3277-.2744-.5552-.0104-.2244.0648-.407.2248-.5473.16-.1418.4352-.2123.8256-.2123h.6336l-.028-.6114h-4.4096l-.0552-1.2723 3.6032-6.196h2.1376zM164.82 118.7252l.0896 1.8076c.5912-.1779 1.132-.2668 1.6216-.2668.9952 0 1.8384.3189 2.5296.9566.692.6378 1.064 1.4623 1.116 2.4735.0544 1.0416-.2376 1.8597-.8744 2.4534-.6384.5945-1.6472.891-3.0256.891-1.216 0-2.188-.2172-2.9168-.649-.4232-.2484-.6432-.5345-.6592-.8566-.0096-.2043.0624-.3822.216-.5328.1536-.1514.3416-.2267.5632-.2267.1848 0 .3888.0825.6136.2483.2248.1667.4576.282.6976.347.3432.0937.7784.1418 1.3064.1418.9816 0 1.6448-.1482 1.9888-.4439.344-.2948.5-.7475.4688-1.3581-.0304-.5985-.2264-1.0697-.5896-1.411-.3624-.343-.8152-.5128-1.3576-.5128-.5856 0-1.2432.1787-1.9744.5344-.1648.0842-.3104.1266-.4368.1266-.232 0-.4288-.0793-.5928-.2371-.1632-.1595-.2504-.3638-.2632-.617l-.2128-4.3844h4.9464c.3888 0 .6696.0705.8432.2108.172.141.2648.3245.276.5512.012.222-.0616.4038-.2208.5432-.1576.141-.432.2108-.8208.2108h-3.332zM174.884 123.9637c.2009.5953.4513 1.0024.7505 1.2203.3.2187.716.3285 1.2496.3285.5336 0 .9368-.1314 1.2104-.3958.2728-.2628.3968-.6194.3712-1.0705-.0288-.516-.2176-.9446-.5656-1.2868-.3488-.3421-.7288-.5128-1.14-.5128-.3264 0-.668.1515-1.0232.4535-.3552.3021-.6392.7228-.8528 1.2636m-.3648-2.3549c.3736-.3068.7328-.5312 1.0784-.6714.3448-.141.7184-.2115 1.1184-.2115.848 0 1.6088.3165 2.2816.9494.6728.6338 1.0368 1.4287 1.0912 2.3853.0504.8878-.2056 1.6065-.7696 2.1562-.5632.5488-1.3552.8237-2.3744.8237-.8512 0-1.5608-.1875-2.1304-.5593-.5696-.3726-1.0152-.9463-1.336-1.7219-.3208-.7732-.5072-1.6361-.5576-2.5864-.06-1.1377.1656-2.0832.6792-2.8364.512-.7523 1.1296-1.3356 1.8544-1.7507.724-.4134 1.5016-.6194 2.3328-.6194.6568 0 1.1736.1202 1.5504.3614.2456.1627.376.3694.3896.6202.0128.2227-.0552.4086-.2048.5592-.1496.1507-.3352.226-.5552.226-.1272 0-.312-.0593-.5552-.1779-.1456-.0697-.2848-.1042-.416-.1042-.516 0-1.0424.1379-1.58.4119-.5376.274-.9936.6947-1.368 1.2627-.2584.395-.4336.8886-.5288 1.4831" fill="#46587F"/>
      <path d="M46.6872 58.488h26.2016M46.2763 61.8166h17.2928" stroke="#46587F" strokeWidth="1.8376" strokeLinecap="round" strokeLinejoin="round" strokeDasharray=".548 2.2968"/>
      <g transform="translate(191.6 114.78)">
        <mask id="home-security-b" fill="#fff">
          <use href="#home-security-a"/>
        </mask>
        <path d="M38.6478 22.8644l.044 10.8737c.008 1.9806-1.636 3.5943-3.672 3.5943-2.0368 0-3.6776-1.6137-3.6656-3.5943l.024-4.0159.044-6.8546c-.92-.8878-1.4824-2.1097-1.4712-3.455.0216-2.6729 2.3008-4.825 5.0904-4.825 2.7896 0 5.064 2.1521 5.0809 4.825.0087 1.3437-.5553 2.5648-1.4745 3.4518M59.951.3455H9.8598c-4.1104 0-7.6128 3.1393-7.7848 7.0157L.3726 45.7054c-.1936 4.3668 3.2696 7.978 7.6984 7.978h53.976c4.428 0 7.8704-3.6112 7.6512-7.978L67.7758 7.3612C67.5814 3.4848 64.0614.3455 59.951.3455" fill="#66C2CC" mask="url(#home-security-b)"/>
      </g>
      <path d="M223.8548 166.8145h-26.3432c-4.4152 0-7.848-3.5903-7.6304-7.9315l1.9112-38.1279c.1936-3.8564 3.704-6.9788 7.8024-6.9788H249.5516c4.0992 0 7.5912 3.1224 7.7624 6.9788l1.6928 38.128c.048 1.0848-.132 2.1232-.4976 3.0711" stroke="#46587F" strokeWidth="2.1536" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M220.8438 143.9079l-.032 4.0038c-.016 1.9743 1.62 3.5832 3.6528 3.5832 2.0336 0 3.6784-1.609 3.6736-3.5832l-.0232-10.84c.92-.8846 1.4848-2.1017 1.4793-3.4413-.012-2.6642-2.2793-4.8099-5.064-4.8099-2.7857 0-5.0649 2.1457-5.092 4.8099-.0137 1.3412.5455 2.56 1.4623 3.4445M201.0466 108.2002c.4696-12.5298 11.032-22.3522 23.6072-22.3522 12.5752 0 23.0808 9.8224 23.4784 22.3522" stroke="#46587F" strokeWidth="2.1536" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M209.3158 108.2002c.228-8.9971 7.084-16.1178 15.32-16.1178 8.2352 0 15.0512 7.1207 15.2272 16.1178" stroke="#46587F" strokeWidth="1.8376" strokeLinecap="round" strokeLinejoin="round" strokeDasharray=".548 2.2968"/>
      <path d="M10.277 166.755h18.1792" stroke="#46587F" strokeWidth="2.1536" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M227.7118 166.755h42.1176" stroke="#46587F" strokeWidth="1.8376" strokeLinecap="round" strokeLinejoin="round" strokeDasharray=".548 2.2968"/>
      <path d="M86.604 135.0904h10.2368c2.6176 0 4.5608 2.1441 4.3192 4.7618l-.7544 8.1863c-.24 2.6096-2.572 4.7433-5.1824 4.7433H16.988c-2.6104 0-4.5776-2.1337-4.3712-4.7433l.6456-8.1863c.2072-2.6177 2.5176-4.7618 5.1344-4.7618h7.1424" stroke="#46587F" strokeWidth="2.1536" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M28.9708 135.0904h54.6304" stroke="#46587F" strokeWidth="1.8376" strokeLinecap="round" strokeLinejoin="round" strokeDasharray=".548 2.2968"/>
      <path d="M27.2907 144.1145c-.0808.9944.5176 1.7451 1.5 1.7451 1.0232 0 1.7072-.79 1.7848-1.745.0776-.9543-.4776-1.7452-1.5008-1.7452-.9832 0-1.7032.7508-1.784 1.7451m4.5064 0c-.136 1.665-1.4328 2.8637-2.9552 2.8637-.772 0-1.3032-.3117-1.6392-.7892l-.2368 2.9173h-1.1872l.6248-7.7144h1.188l-.0528.6474c.4136-.4775.9968-.79 1.7696-.79 1.524 0 2.6248 1.2003 2.4888 2.8652M34.099 144.1145c-.0784.9551.476 1.7451 1.4984 1.7451.9832 0 1.704-.7507 1.7856-1.745.0832-.9944-.5144-1.7452-1.4984-1.7452-1.0224 0-1.7072.7909-1.7856 1.7451zm4.1728 2.721h-1.1872l.0544-.6522c-.4152.4832-1.0032.7949-1.7752.7949-1.5224 0-2.6232-1.1987-2.4864-2.8637.136-1.665 1.4344-2.8652 2.9576-2.8652.7736 0 1.3096.318 1.6456.802l.0536-.6594h1.1888l-.4512 5.4437zM44.1802 142.7561c-.3128-.2051-.9672-.4663-1.644-.4663-.6472 0-1.0504.2612-1.0824.6482-.032.3806.3576.4888.8512.5633l.556.0849c1.1728.1707 1.8352.6762 1.7576 1.608-.088 1.0457-1.0576 1.7788-2.6256 1.7788-.5624 0-1.5304-.1081-2.2768-.6986l.6256-.8926c.3664.3012.8624.5576 1.7488.5576.812 0 1.26-.2564 1.2936-.665.0264-.3069-.2528-.512-.8928-.6025l-.5616-.0737c-1.1912-.165-1.7872-.7228-1.7144-1.5977.0896-1.08 1.0088-1.746 2.396-1.746.8528 0 1.6256.2108 2.1576.5746l-.5888.927zM49.927 142.7561c-.3128-.2051-.9664-.4663-1.6432-.4663-.648 0-1.0512.2612-1.0832.6482-.032.3806.3568.4888.8504.5633l.5552.0849c1.1736.1707 1.836.6762 1.7568 1.608-.0888 1.0457-1.0592 1.7788-2.6272 1.7788-.5624 0-1.5304-.1081-2.276-.6986l.6264-.8926c.3664.3012.8616.5576 1.748.5576.812 0 1.26-.2564 1.2944-.665.0264-.3069-.252-.512-.892-.6025l-.5616-.0737c-1.1912-.165-1.7864-.7228-1.7136-1.5977.0912-1.08 1.0112-1.746 2.3984-1.746.852 0 1.6248.2108 2.1568.5746l-.5896.927zM53.2563 145.9783c-.0456.5344-.5448 1-1.0728 1-.5288 0-.9552-.4656-.9096-1 .0456-.5336.5496-.988 1.0784-.988.528 0 .9496.4544.904.988m.3176-3.7394c-.0448.5344-.5448 1.0008-1.0728 1.0008-.5288 0-.956-.4664-.9104-1.0008.0456-.5352.5496-.9895 1.0792-.9895.528 0 .9504.4543.904.9895" fill="#46587F"/>
      <path fill="#DEE6F7" d="M59.3021 143.3907l.1288-1.5007h.9096l-.1288 1.5007 1.4664-.4663.2032.8701-1.4656.4599.7816 1.2163-.7848.5344-.7768-1.2106-.984 1.2106-.6928-.5344.9848-1.2163-1.3808-.4599.3528-.8701zM64.7013 143.3907l.1304-1.5007h.9096l-.1304 1.5007 1.4672-.4663.2024.8701-1.4664.4599.7808 1.2163-.7856.5344-.7752-1.2106-.9856 1.2106-.692-.5344.9856-1.2163-1.3808-.4599.3536-.8701zM70.1005 143.3907l.132-1.5007h.9088l-.1312 1.5007 1.4672-.4663.2024.8701-1.4672.4599.78 1.2163-.7856.5344-.7744-1.2106-.9864 1.2106-.6928-.5344.9872-1.2163-1.38-.4599.3544-.8701zM75.4997 143.3907l.1328-1.5007h.9096l-.1328 1.5007 1.468-.4663.2008.8701-1.4672.4599.7792 1.2163-.7864.5344-.7728-1.2106-.988 1.2106-.692-.5344.9888-1.2163-1.38-.4599.3552-.8701zM80.899 143.3907l.1336-1.5007h.9104l-.1344 1.5007 1.468-.4663.2008.8701-1.4672.4599.7776 1.2163-.7864.5344-.7728-1.2106-.9888 1.2106-.6904-.5344.9888-1.2163-1.38-.4599.356-.8701zM86.2986 143.3907l.1344-1.5007h.9104l-.1352 1.5007 1.468-.4663.2.8701-1.468.4599.7768 1.2163-.7864.5344-.772-1.2106-.9896 1.2106-.6904-.5344.9904-1.2163-1.38-.4599.3568-.8701z"/>
    </g>
    </svg>;


  return (
    <header title={ data.site.siteMetadata.title }>
      <div className="gradient"/>
      <h2>Make your payments</h2>
      <h3>Simple.Affordable.Secure.</h3>
      <h5>Serving the Bay Area for over 15 years</h5>
      <div className="header-svg">
        { svgIcon }
      </div>
    </header>
  );
};

export default Header;