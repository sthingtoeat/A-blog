module.exports = {
    themeConfig: {
      logo: '/assets/img/logo.png',
      nav: [
        { text: 'Home', link: '/' },
        { text: '介绍', link: '/introduce/about' },
        { text: 'External', link: 'https://video.gincode.icu' },
        {
          text: 'Languages',
          ariaLabel: 'Language Menu',
          items: [
            { text: 'Chinese', link: '/language/chinese/' },
            { text: 'Japanese', link: '/language/japanese/' }
          ]
        }
      ]
    }
  }
