import React, { Component } from 'react';

class Layout extends Component {
    render() {
        return <html lang="en-AU" className="no-js no-svg">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="profile" href="http://gmpg.org/xfn/11" />

                <title>University of Queensland Cycling Club &#8211; Just another WordPress site</title>
                <link rel='dns-prefetch' href='//fonts.googleapis.com' />
                <link rel='dns-prefetch' href='//s.w.org' />
                <link href='https://fonts.gstatic.com' crossorigin rel='preconnect' />
                <link rel="alternate" type="application/rss+xml" title="University of Queensland Cycling Club &raquo; Feed" href="http://uqcc.azurewebsites.net/feed/" />
                <link rel="alternate" type="application/rss+xml" title="University of Queensland Cycling Club &raquo; Comments Feed" href="http://uqcc.azurewebsites.net/comments/feed/" />
                <link rel='stylesheet' id='dashicons-css' href='http://uqcc.azurewebsites.net/wp-includes/css/dashicons.min.css?ver=4.9' type='text/css' media='all' />
                <link rel='stylesheet' id='admin-bar-css' href='http://uqcc.azurewebsites.net/wp-includes/css/admin-bar.min.css?ver=4.9' type='text/css' media='all' />
                <link rel='stylesheet' id='twentyseventeen-fonts-css' href='https://fonts.googleapis.com/css?family=Libre+Franklin%3A300%2C300i%2C400%2C400i%2C600%2C600i%2C800%2C800i&#038;subset=latin%2Clatin-ext' type='text/css' media='all' />
                <link rel='stylesheet' id='twentyseventeen-style-css' href='/wp-content/themes/twentyseventeen/style.css?ver=4.9' type='text/css' media='all' />
                <script type='text/javascript' src='http://uqcc.azurewebsites.net/wp-includes/js/jquery/jquery.js?ver=1.12.4'></script>
                <script type='text/javascript' src='http://uqcc.azurewebsites.net/wp-includes/js/jquery/jquery-migrate.min.js?ver=1.4.1'></script>
                <link rel='https://api.w.org/' href='http://uqcc.azurewebsites.net/wp-json/' />
                <link rel="EditURI" type="application/rsd+xml" title="RSD" href="http://uqcc.azurewebsites.net/xmlrpc.php?rsd" />
                <link rel="wlwmanifest" type="application/wlwmanifest+xml" href="http://uqcc.azurewebsites.net/wp-includes/wlwmanifest.xml" />
                <meta name="generator" content="WordPress 4.9" />
            </head>

            <body className="home blog logged-in admin-bar no-customize-support group-blog hfeed has-header-image has-sidebar colors-light">
                <div id="page" className="site">
                    <a className="skip-link screen-reader-text" href="#content">Skip to content</a>
                    <header id="masthead" className="site-header" role="banner">
                        <div className="custom-header">
                            <div className="custom-header-media">
                                <div id="wp-custom-header" className="wp-custom-header">
                                    <img src="/wp-content/themes/twentyseventeen/assets/images/header.jpg" width="2000" height="1200" alt="University of Queensland Cycling Club" />
                                </div>
                            </div>
                            <div className="site-branding">
                                <div className="wrap">
                                    <div className="site-branding-text">
                                        <h1 className="site-title">
                                            <a href="http://uqcc.azurewebsites.net/" rel="home">University of Queensland Cycling Club</a>
                                        </h1>
                                        <p className="site-description">Just another WordPress site</p>
                                    </div>
                                    <a href="#content" className="menu-scroll-down">
                                        <svg className="icon icon-arrow-right" aria-hidden="true" role="img">
                                            <use href="#icon-arrow-right" href="#icon-arrow-right"></use>
                                        </svg>
                                        <span className="screen-reader-text">Scroll down to content</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </header>
                    <div className="site-content-contain">
                        <div id="content" className="site-content">
                            <div className="wrap">
                                <header className="page-header">
                                    <h2 className="page-title">Posts</h2>
                                </header>
                                <div id="primary" className="content-area">
                                    <main id="main" className="site-main" role="main">
                                        {this.props.children}
                                    </main>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </body >
        </html >
    }
}

export default Layout;