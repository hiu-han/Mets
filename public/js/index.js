$(document).ready(function () {
  // INDEX -> main-banner
  // bg slide
  const bannerBgList = $('.banner-bg__list'),
    bannerBgItem = bannerBgList.children('.banner-bg__item');

  const bannerCount = bannerBgItem.length;

  let showBanner = 0;

  console.log(bannerBgItem);
  console.log(bannerCount);

  const clonedBanner = $('.banner-bg__list > .banner-bg__item--01').clone();
  bannerBgList.append(clonedBanner);
  bannerBgList.width(`100*${bannerCount + 1}%`);
  bannerBgItem.width(`100/${bannerCount + 1}%`);

  console.log(bannerCount);
  console.log(bannerBgList.width());
  console.log(`100*${bannerCount + 1}%`);

  function slideBanner() {
    if (showBanner == bannerCount) {
      showBanner = 0;
      bannerBgList.css('margin-left', 0);
    }
    showBanner++;
    bannerBgList.stop().animate(
      {
        marginLeft: `${-showBanner * 100}%`,
      },
      1500,
      'swing'
    );
  }

  // const setSlide = setInterval(slideBanner, 4000);
});
