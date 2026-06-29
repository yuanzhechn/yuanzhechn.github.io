import{A as e,E as t,M as n,N as r,S as i,T as a,_ as o,a as s,c,d as l,g as u,j as d,k as f,l as p,m,p as h,u as g,v as ee,x as _,y as te}from"./index-CuvMcYrI.js";import{n as v}from"./AppHeader-Dup6HtHN.js";var y=`@font-face {
    font-family: CascadiaCode;
    src: url(Cascadia-Code-Regular.ttf)
}

@font-face {
    font-family: LXGWWenKai;
    src: url(LXGWWenKai-Regular.ttf)
}

html {
    font-size: 16px;
    font-family: LXGWWenKai
}

#write {
    max-width: 950px;
    margin: 0 auto;
    padding: 15px;
    line-height: 2.25;
    color: #000;
    letter-spacing: 1.1px;
    word-break: break-word;
    word-wrap: break-word;
    text-align: left;
    position: relative;
    z-index: 0
}

#write::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    z-index: -1;
    background-color: var(--element-color);
    opacity: .12;
    -webkit-mask-image: var(--bg-style);
    mask-image: var(--bg-style);
    -webkit-mask-size: 20px 20px;
    mask-size: 20px 20px;
    -webkit-mask-repeat: repeat;
    mask-repeat: repeat;
    -webkit-mask-position: center;
    mask-position: center
}

#write p {
    color: #333;
    margin: 10px 10px;
    font-family: Optima-Regular, Optima, LXGWWenKai, PingFangSC-light, PingFangTC-light, "PingFang SC", Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
    font-size: 1rem;
    word-spacing: 2px
}

#write h3.md-heading:after,
h4.md-heading:after,
h5.md-heading:after,
h6.md-heading:after {
    content: " ";
    display: inline-block;
    height: 2em;
    width: 2em;
    vertical-align: top;
    margin-left: -2px;
    background-color: var(--element-color-shallow);
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-position: center;
    -webkit-mask-size: 24px 24px;
    mask-repeat: no-repeat;
    mask-position: center;
    mask-size: 24px 24px
}

#write h3.md-heading:after {
    -webkit-mask-image: var(--h3-icon-shape);
    mask-image: var(--h3-icon-shape)
}

#write h4.md-heading:after {
    -webkit-mask-image: var(--h4-icon-shape);
    mask-image: var(--h4-icon-shape)
}

#write h5.md-heading:after {
    -webkit-mask-image: var(--h5-icon-shape);
    mask-image: var(--h5-icon-shape)
}

#write h6.md-heading:after {
    -webkit-mask-image: var(--h6-icon-shape);
    mask-image: var(--h6-icon-shape)
}

#write h1 {
    text-align: center;
    font-size: 1.8rem;
    font-weight: 700;
    margin: 1em auto .8em;
    line-height: 1.4;
    width: fit-content;
    min-width: 120px;
    min-height: 1.4em;
    color: #222;
    position: relative;
    padding-bottom: 12px;
    transition: color .3s ease, transform .3s ease;
    border-bottom: none
}

#write h1::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 40px;
    height: 4px;
    border-radius: 4px;
    background: var(--head-title-h2-background);
    background-size: 100% auto;
    transform: translateX(-50%);
    transition: width .4s cubic-bezier(.25, .8, .25, 1)
}

#write h1:not(.md-focus):hover {
    color: var(--head-title-color);
    transform: translateY(-2px)
}

#write h1:hover::after {
    width: 100%
}

#write h2 {
    color: var(--head-title-h2-color);
    font-size: 1.4rem;
    line-height: 1.5;
    width: fit-content;
    font-weight: 700;
    margin: 20px 0;
    padding: 5px 12px;
    border-radius: 8px;
    background: var(--head-title-h2-background);
    background-size: 200% auto;
    background-position: 0 center;
    box-shadow: 0 2px 5px rgba(61, 184, 211, .15);
    transition: background-position .5s ease-out, transform .4s ease, box-shadow .4s ease
}

#write h2:hover {
    background-position: 100% center;
    transform: scale(1.01);
    box-shadow: 0 8px 20px rgba(61, 184, 211, .35)
}

#write h3 {
    position: relative;
    width: fit-content;
    margin: 20px 0;
    text-align: left;
    font-size: 1.3rem;
    padding-left: 10px;
    transition: all .3s cubic-bezier(.25, .8, .25, 1)
}

#write h3 {
    position: relative;
    width: fit-content;
    margin: 20px 0;
    text-align: left;
    font-size: 1.3rem;
    padding-left: 10px;
    transition: all .3s cubic-bezier(.25, .8, .25, 1)
}

#write h3::before {
    content: '';
    position: absolute;
    left: -6px;
    top: 50%;
    transform: translateY(-50%);
    width: 5px;
    height: 61%;
    border-radius: 4px;
    background-color: var(--head-title-color);
    transition: all .3s cubic-bezier(.25, .8, .25, 1)
}

#write h3 span {
    border-bottom: 2px hidden var(--head-title-color);
    transition: color .3s ease
}

#write h3:hover {
    padding-left: 18px;
    color: var(--head-title-color);
    cursor: pointer
}

#write h3:hover::before {
    height: 66%;
    background-color: var(--head-title-color);
    width: 7px
}

#write h4,
#write h5,
#write h6 {
    transition: color .3s ease, transform .3s ease
}

#write h4::before,
#write h5::before,
#write h6::before {
    transition: all .3s cubic-bezier(.34, 1.56, .64, 1)
}

#write h4 {
    margin: 20px 0;
    font-size: 1.15rem;
    text-align: left
}

#write h4::before {
    content: "";
    margin-right: 7px;
    display: inline-block;
    background-color: var(--head-title-color);
    width: 10px;
    height: 10px;
    border-radius: 100%;
    border: var(--head-title-color) 1px solid;
    vertical-align: inherit
}

#write h4:hover::before {
    transform: scale(1.3);
    box-shadow: 0 0 0 4px var(--element-color-soo-shallow)
}

#write h5 {
    margin: 23px 0;
    font-size: 1.1rem;
    text-align: left
}

#write h5::before {
    content: "";
    margin-right: 7px;
    display: inline-block;
    background-color: #fff;
    width: 10px;
    height: 10px;
    border-radius: 100%;
    border: var(--head-title-color) 2px solid;
    vertical-align: inherit;
    box-sizing: border-box
}

#write h5:hover::before {
    background-color: var(--head-title-color);
    transform: scale(1.2);
    box-shadow: 0 0 0 3px var(--element-color-soo-shallow)
}

#write h6 {
    margin: 23px 0;
    font-size: 1.1rem;
    text-align: left
}

#write h6::before {
    content: "-";
    color: var(--head-title-color);
    margin-right: 7px;
    display: inline-block;
    vertical-align: inherit
}

#write h6:hover::before {
    transform: scaleX(1.8) translateX(1px);
    font-weight: 700
}

#write h4:hover,
#write h5:hover,
#write h6:hover {
    color: var(--element-color-deep);
    transform: translateX(6px)
}

#write {
    counter-reset: h1
}

h1 {
    counter-reset: h2
}

h2 {
    counter-reset: h3
}

h3 {
    counter-reset: h4
}

h4 {
    counter-reset: h5
}

h5 {
    counter-reset: h6
}

.sidebar-content {
    counter-reset: h1
}

.outline-content {
    counter-reset: h1
}

.outline-h1 {
    counter-reset: h2
}

.outline-h2 {
    counter-reset: h3
}

.outline-h3 {
    counter-reset: h4
}

.outline-h4 {
    counter-reset: h5
}

.outline-h5 {
    counter-reset: h6
}

.md-toc-content {
    counter-reset: h1toc
}

.md-toc-h1 {
    counter-reset: h2toc
}

.md-toc-h2 {
    counter-reset: h3toc
}

.md-toc-h3 {
    counter-reset: h4toc
}

.md-toc-h4 {
    counter-reset: h5toc
}

.md-toc-h5 {
    counter-reset: h6toc
}

#write h1:before {
    counter-increment: h1;
    content: var(--autonum-h1)
}

#outline-content li.outline-h1>div>span.outline-label:before {
    counter-increment: h1;
    content: var(--autonum-h1)
}

.outline-content .outline-h1>.outline-item>.outline-label:before {
    counter-increment: h1;
    content: var(--autonum-h1)
}

#write span.md-toc-item.md-toc-h1>a:before {
    counter-increment: h1toc;
    content: var(--autonum-h1toc)
}

#write h2:before {
    counter-increment: h2;
    content: var(--autonum-h2);
    color: var(--head-title-h2-color)
}

.outline-content .outline-h2>.outline-item>.outline-label:before {
    counter-increment: h2;
    content: var(--autonum-h2)
}

li.outline-h2>div>a.outline-label:before {
    counter-increment: h2;
    content: var(--autonum-h2)
}

#write span.md-toc-item.md-toc-h2>a:before {
    counter-increment: h2toc;
    content: var(--autonum-h2toc)
}

#write h3>span:first-of-type::before {
    counter-increment: h3;
    content: var(--autonum-h3);
    color: var(--element-color)
}

#outline-content li.outline-h3>div>span.outline-label:before {
    counter-increment: h3;
    content: var(--autonum-h3)
}

.outline-content .outline-h3>.outline-item>.outline-label:before {
    counter-increment: h3;
    content: var(--autonum-h3)
}

#write span.md-toc-item.md-toc-h3>a:before {
    counter-increment: h3toc;
    content: var(--autonum-h3toc)
}

#write h4>span:first-of-type::before {
    counter-increment: h4;
    content: var(--autonum-h4);
    color: var(--element-color)
}

#outline-content li.outline-h4>div>span.outline-label:before {
    counter-increment: h4;
    content: var(--autonum-h4)
}

.outline-content .outline-h4>.outline-item>.outline-label:before {
    counter-increment: h4;
    content: var(--autonum-h4)
}

#write span.md-toc-item.md-toc-h4>a:before {
    counter-increment: h4toc;
    content: var(--autonum-h4toc)
}

#write h5>span:first-of-type::before {
    counter-increment: h5;
    content: var(--autonum-h5);
    color: var(--element-color)
}

#outline-content li.outline-h5>div>span.outline-label:before {
    counter-increment: h5;
    content: var(--autonum-h5)
}

.outline-content .outline-h5>.outline-item>.outline-label:before {
    counter-increment: h5;
    content: var(--autonum-h5)
}

#write span.md-toc-item.md-toc-h5>a:before {
    counter-increment: h5toc;
    content: var(--autonum-h5toc)
}

#write h6>span:first-of-type::before {
    counter-increment: h6;
    content: var(--autonum-h6);
    color: var(--element-color)
}

#outline-content li.outline-h6>div>span.outline-label:before {
    counter-increment: h6;
    content: var(--autonum-h6)
}

.outline-content .outline-h6>.outline-item>.outline-label:before {
    counter-increment: h6;
    content: var(--autonum-h6)
}

#write span.md-toc-item.md-toc-h6>a:before {
    counter-increment: h6toc;
    content: var(--autonum-h6toc)
}

::marker {
    color: var(--element-color-deep)
}

li.md-list-item {
    margin: .4rem 0
}

#write ol,
#write ul {
    margin-top: 0;
    margin-left: 16px;
    margin-bottom: 8px;
    padding-left: 13px
}

#write em {
    padding: 0 3px 0 0
}

#write ul {
    list-style-type: disc
}

#write ul ul {
    list-style-type: circle
}

#write ul ul ul {
    list-style-type: square
}

#write ol {
    list-style-type: decimal
}

#write ol ol {
    list-style-type: lower-alpha
}

#write ol ol ol {
    list-style-type: lower-roman
}

#write li section {
    margin-top: 5px;
    margin-bottom: 5px;
    line-height: 1.7rem;
    text-align: justify;
    color: #000;
    font-weight: 500
}

#write li:before {
    content: "";
    height: calc(100% - 50px);
    top: 35px;
    position: absolute;
    border-left: .5px solid var(--element-color);
    left: -14.5px
}

#write .task-list-item input {
    appearance: none;
    -webkit-appearance: none;
    width: 1.3rem;
    height: 1.3rem;
    position: absolute;
    top: 3px;
    left: -22px;
    outline: 0;
    cursor: pointer;
    z-index: 1
}

#write .task-list-item input::before {
    content: '';
    display: block;
    position: absolute;
    top: -2px;
    left: 18px;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 1px solid var(--element-color-deep, #ffa531);
    background: #fff;
    transition: all .4s cubic-bezier(.5, 1.6, .4, .7);
    box-sizing: border-box
}

#write .task-list-item input::after {
    content: '';
    display: block;
    position: absolute;
    top: 40%;
    left: 138%;
    width: .35rem;
    height: .65rem;
    border: solid #fff;
    border-width: 0 2.5px 2.5px 0;
    transform: translate(-50%, -60%) rotate(45deg) scale(1);
    transition: all .3s cubic-bezier(.5, 1.6, .4, .7);
    opacity: 0
}

#write .task-list-item input:checked::before {
    background: var(--element-color, #ffc000);
    border-color: var(--element-color, #ffc000);
    transform: scale(1.05);
    animation: task-pulse .4s forwards
}

@keyframes task-pulse {
    0% {
        transform: scale(1)
    }

    50% {
        transform: scale(1.15)
    }

    100% {
        transform: scale(1)
    }
}

#write .task-list-item input:checked::after {
    opacity: 1;
    transform: translate(-50%, -60%) rotate(45deg) scale(1)
}

#write .task-list-item input[type=checkbox]+p span,
#write .task-list-item input[type=checkbox]+span {
    position: relative;
    display: inline;
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;
    transition: color .4s ease;
    background-image: linear-gradient(currentColor, currentColor);
    background-position: 0 50%;
    background-size: 0 1.5px;
    background-repeat: no-repeat;
    transition: background-size .4s cubic-bezier(.25, .8, .25, 1), color .4s
}

#write .task-list-item input[type=checkbox]:checked+p span,
#write .task-list-item input[type=checkbox]:checked+span {
    color: #bbb;
    background-size: 100% 1.5px
}

#write li.task-list-item {
    position: relative
}

#write blockquote {
    position: relative;
    margin: 20px 0;
    padding: 18px 20px 18px 48px;
    background-color: var(--element-color-soo-shallow);
    border: none;
    border-radius: 16px;
    color: #555;
    line-height: 1.6;
    transition: transform .3s cubic-bezier(.34, 1.56, .64, 1), background-color .3s ease
}

#write blockquote::before {
    content: "✨";
    position: absolute;
    left: 16px;
    top: 18px;
    font-size: 20px;
    line-height: 1;
    font-family: "Segoe UI Emoji", "Apple Color Emoji", "Noto Color Emoji", sans-serif
}

#write blockquote p {
    color: #555;
    margin-bottom: .5em
}

#write blockquote p:last-child {
    margin-bottom: 0
}

#write blockquote:hover {
    transform: scale(1.02)
}

#write a {
    color: #333;
    text-decoration: none;
    font-weight: 500;
    padding: 2px 4px;
    margin: 0 -2px;
    border-radius: 4px;
    background: 0 0;
    border-bottom: none;
    transition: all .2s ease
}

#write p a:not(.md-toc-inner)::before {
    content: '';
    display: inline-block;
    width: 1em;
    height: 1em;
    margin-right: 2px;
    vertical-align: -.15em;
    background-color: var(--element-color);
    -webkit-mask: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1024 1024'%3E%3Cpath d='M477.934459 330.486594A50.844091 50.844091 0 0 1 406.752731 258.796425L512 152.532274a254.220457 254.220457 0 0 1 359.467726 359.467726L762.66137 618.772592a50.844091 50.844091 0 1 1-71.690168-71.690169l106.772591-106.772592a152.532274 152.532274 0 0 0-215.578947-215.578947z m70.164846 361.501489A50.844091 50.844091 0 1 1 619.789474 762.66137l-107.281033 107.281033A254.220457 254.220457 0 0 1 152.532274 512L259.813307 406.752731a50.844091 50.844091 0 1 1 72.19861 69.656405l-107.789474 107.281033a152.532274 152.532274 0 0 0 215.578947 215.578947z m-126.601788-16.77855a50.844091 50.844091 0 1 1-71.690168-71.690169l251.678252-251.678252a50.844091 50.844091 0 0 1 71.690169 71.690169z'/%3E%3C/svg%3E") no-repeat center/contain;
    mask: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1024 1024'%3E%3Cpath d='M477.934459 330.486594A50.844091 50.844091 0 0 1 406.752731 258.796425L512 152.532274a254.220457 254.220457 0 0 1 359.467726 359.467726L762.66137 618.772592a50.844091 50.844091 0 1 1-71.690168-71.690169l106.772591-106.772592a152.532274 152.532274 0 0 0-215.578947-215.578947z m70.164846 361.501489A50.844091 50.844091 0 1 1 619.789474 762.66137l-107.281033 107.281033A254.220457 254.220457 0 0 1 152.532274 512L259.813307 406.752731a50.844091 50.844091 0 1 1 72.19861 69.656405l-107.789474 107.281033a152.532274 152.532274 0 0 0 215.578947 215.578947z m-126.601788-16.77855a50.844091 50.844091 0 1 1-71.690168-71.690169l251.678252-251.678252a50.844091 50.844091 0 0 1 71.690169 71.690169z'/%3E%3C/svg%3E") no-repeat center/contain;
    transition: transform .4s cubic-bezier(.25, .8, .25, 1)
}

#write a:not(.md-toc-inner):hover {
    color: var(--element-color-deep);
    background: var(--element-color-soo-shallow)
}

#write a:hover:not(.md-toc-inner)::before {
    transform: rotate(180deg);
    background-color: var(--element-color-deep)
}

#write a:visited {
    color: var(--element-color-deep)
}

#write sup a::before {
    content: none
}

#write mark {
    background-color: var(--element-color-so-shallow);
    color: inherit;
    padding: 2px 6px;
    border-radius: 6px;
    margin: 0 2px;
    position: relative;
    transition: all .3s ease;
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone
}

#write mark::after,
#write mark::before {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: var(--element-color-deep);
    font-weight: 700;
    font-family: "Courier New", monospace;
    font-size: 1.1em;
    opacity: 0;
    pointer-events: none;
    transition: all .3s cubic-bezier(.34, 1.56, .64, 1)
}

#write mark::before {
    content:'{';
    left: -5px
}

#write mark::after {
    content: '}';
    right: -5px
}

#write mark:hover {
    background-color: var(--element-color);
    color: #fff;
    border-radius: 4px;
    padding: 2px 12px
}

#write mark:hover::before {
    opacity: 1;
    left: 3px
}

#write mark:hover::after {
    opacity: 1;
    right: 3px
}

#write strong {
    color: var(--element-color);
    font-weight: 700;
    display: inline-block;
    transition: transform .2s cubic-bezier(.5, 1.5, .5, 1)
}

#write strong:hover {
    transform: translateY(-2px) scale(1.1);
    text-shadow: 2px 2px 0 var(--element-color-soo-shallow)
}

#write mark strong {
    color: var(--element-color-deep)
}

#write mark:hover strong {
    color: #fff;
    text-shadow: none;
    transform: translateY(-2px) scale(1.1)
}

#write em {
    font-style: italic;
    color: #555;
    text-decoration: none;
    padding: 0 2px;
    transition: all .3s ease
}

#write em:hover {
    color: var(--element-color);
    text-decoration: underline wavy var(--element-color-shallow);
    text-underline-offset: 4px
}

#write del {
    text-decoration: line-through;
    text-decoration-color: var(--element-color);
    color: #999;
    transition: all .3s ease
}

#write del:hover {
    opacity: .6;
    text-decoration-color: var(--element-color-deep);
    cursor: not-allowed
}

#write hr {
    border: none;
    border-top: 3px dashed var(--element-color-shallow);
    margin: 30px 0;
    opacity: .6;
    transform: scaleX(.8);
    transition: all .4s ease
}

#write hr:hover {
    transform: scaleX(1);
    border-color: var(--element-color);
    opacity: 1
}

#write p:has(img) {
    text-align: center
}

#write img {
    border-radius: 12px;
    display: inline-block;
    margin: 15px 5px;
    object-fit: contain;
    filter: brightness(1) contrast(1);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, .05);
    transition: all .4s cubic-bezier(.34, 1.56, .64, 1);
    max-width: 100%;
    cursor: zoom-in
}

#write p>img:only-child {
    display: block;
    margin: 20px auto
}

#write img:hover {
    filter: brightness(1.05) contrast(1.05);
    transform: scale(1.05);
    box-shadow: 0 12px 30px -4px var(--element-color-soo-shallow);
    z-index: 10
}

#write figcaption {
    display: block;
    margin-top: 12px;
    font-size: 13px;
    color: #888;
    text-align: center;
    line-height: 1.5;
    transition: color .3s ease
}

#write figure:hover>figcaption,
#write p:hover>img+figcaption {
    color: var(--element-color-deep)
}

pre.md-meta-block {
    padding: 30px 20px 20px;
    margin: 20px 0;
    font-family: var(--monospace);
    font-size: 13px;
    color: #555;
    line-height: 1.6;
    background-color: var(--element-color-soo-shallow);
    border: 1.5px dashed var(--element-color);
    border-radius: 8px;
    position: relative;
    transition: all .3s ease
}

pre.md-meta-block::after {
    content: "YAML";
    position: absolute;
    top: 0;
    right: 20px;
    background-color: var(--element-color);
    color: #fff;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 1px;
    padding: 3px 10px;
    border-radius: 0 0 6px 6px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, .1);
    pointer-events: none
}

pre.md-meta-block:hover {
    background-color: #fff;
    border-style: solid;
    border-color: var(--element-color-deep);
    box-shadow: 0 4px 15px rgba(0, 0, 0, .05);
    transform: translateY(-2px)
}

#write code:not(.md-fencescode) {
    font-family: CascadiaCode, "Lucida Console", Consolas, Courier, monospace;
    font-size: .9em;
    letter-spacing: .5px;
    color: var(--element-color-linecode);
    background-color: var(--element-color-linecode-background);
    padding: 5px 5px;
    margin: 0 2px;
    border-radius: 6px;
    vertical-align: middle;
    transition: all .2s cubic-bezier(.34, 1.56, .64, 1)
}

#write code:not(.md-fencescode):hover {
    background-color: var(--element-color);
    color: #fff;
    transform: scale(1.05);
    box-shadow: 0 4px 10px var(--element-color-so-shallow);
    text-decoration: none
}

.md-diagram {
    background: 0 0 !important;
    margin: 20px 0
}

svg[id^=mermaid] {
    font-family: "Cascadia Code", "HarmonyOS Sans SC", sans-serif !important;
    max-width: 100% !important
}

.node circle,
.node ellipse,
.node path,
.node rect {
    fill: var(--element-color-so-shallow) !important;
    stroke: var(--primary-color) !important;
    stroke-width: 1.5px !important;
    transition: all .3s ease
}

.node polygon {
    fill: color-mix(in srgb, var(--element-color-shallow), transparent 50%) !important;
    stroke: var(--element-color-deep) !important;
    stroke-width: 1.5px !important
}

.edgePath .path,
.flowchart-link {
    stroke: var(--element-color-deep) !important;
    stroke-width: 1.5px !important;
    opacity: .8 !important
}

.marker path,
marker path {
    fill: var(--element-color-deep) !important;
    stroke: var(--element-color-deep) !important
}

.cluster-label text,
.edgeLabel,
.edgeLabel .label,
.edgeLabel div,
.edgeLabel p,
.edgeLabel span,
.labelBkg,
.node .label {
    background-color: #fff !important;
    color: var(--appui-color-text) !important;
    fill: var(--appui-color-text) !important;
    font-weight: 500 !important;
    text-shadow: 0 0 5px #fff, 0 0 10px #fff !important
}

.edgeLabel rect {
    fill: #fff !important;
    opacity: .9 !important
}

.labelBkg {
    background-color: #fff !important;
    opacity: .9 !important;
    border-radius: 4px;
    padding: 0 4px
}

.cluster rect {
    fill: color-mix(in srgb, var(--element-color-soo-shallow), transparent 50%) !important;
    stroke: var(--element-color-shallow) !important;
    stroke-dasharray: 4px !important
}

.cluster span,
.cluster-label text {
    fill: var(--element-color-deep) !important;
    color: var(--element-color-deep) !important;
    background: 0 0 !important;
    font-weight: 700 !important
}

.md-fences:not([lang=mermaid])::before {
    content: attr(lang);
    font-family: CascadiaCode, "Lucida Console", Consolas, Courier, monospace;
    text-align: right;
    padding-right: 15px;
    color: #7e7e7e;
    display: block;
    background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNDUwcHgiIGhlaWdodD0iMTMwcHgiPgogIDxlbGxpcHNlIGN4PSI2NSIgY3k9IjY1IiByeD0iNTAiIHJ5PSI1MiIgc3Ryb2tlPSJyZ2IoMjIwLDYwLDU0KSIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJyZ2IoMjM3LDEwOCw5NikiLz4KICA8ZWxsaXBzZSBjeD0iMjI1IiBjeT0iNjUiIHJ4PSI1MCIgcnk9IjUyIiAgc3Ryb2tlPSJyZ2IoMjE4LDE1MSwzMykiIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0icmdiKDI0NywxOTMsODEpIi8+CiAgPGVsbGlwc2UgY3g9IjM4NSIgY3k9IjY1IiByeD0iNTAiIHJ5PSI1MiIgIHN0cm9rZT0icmdiKDI3LDE2MSwzNykiIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0icmdiKDEwMCwyMDAsODYpIi8+Cjwvc3ZnPg==);
    height: 32px;
    width: 100%;
    background-size: 40px;
    background-repeat: no-repeat;
    background-color: #f8f8f8;
    border-radius: 5px 5px 0 0;
    background-position: 6px 11px;
    margin-bottom: 0
}

.CodeMirror-wrap .CodeMirror-scroll {
    overflow-x: auto
}

.md-fences {
    position: relative;
    z-index: 1;
    overflow: visible
}

.md-fences.md-focus {
    z-index: 100
}

.md-fences .cm-s-inner.CodeMirror {
    margin-top: 0
}

.cm-s-inner.CodeMirror {
    padding: 20px 12px 12px 20px;
    color: #4f5467;
    font-family: CascadiaCode, "Lucida Console", Consolas, Courier, monospace;
    border-radius: 10px;
    background-color: #fa0303;
    line-height: 1.6rem
}

.CodeMirror-gutters {
    border-right: 1px solid #9d9d9d52;
    background: inherit;
    white-space: nowrap
}

pre.CodeMirror-line {
    padding: 0 1.2rem
}

.CodeMirror-linenumber {
    padding: 0 3px 0 5px;
    text-align: right;
    color: #a3a3a3
}

.cm-s-inner.CodeMirror {
    background: #f8f8f8;
    border-radius: 0 0 5px 5px;
    padding: 24px 12px 12px 12px;
    page-break-before: auto;
    line-height: 1.8rem
}

.md-rawblock .md-rawblock-tooltip {
    inset: auto .3rem auto auto;
    transform: translateY(-120%)
}

.cm-keyword {
    color: #a626a4 !important;
    font-weight: 700 !important
}

.cm-variable {
    color: #b92121 !important
}

.cm-tag {
    color: var(--color-cm-keyword) !important;
    font-weight: 700 !important
}

.cm-variable-2,
.cm-variable-3 {
    color: #7aadad !important;
    font-weight: 700 !important
}

.cm-def {
    color: #c18401 !important
}

.cm-attribute {
    color: #8f6aa8 !important
}

.cm-comment,
.md-comment,
.md-meta {
    color: #9a9a9a !important
}

.cm-string {
    color: #50a14f !important;
    font-variant-ligatures: common-ligatures !important
}

.cm-link {
    color: #e46918 !important
}

.cm-type {
    color: #626161
}

.cm-property {
    color: #800a84 !important
}

.cm-tag:not(.cm-bracket) {
    font-weight: 700 !important
}

.cm-operator {
    color: #0abe00 !important
}

.cm-number {
    color: #1694b6 !important
}

.cm-meta {
    color: #4078f2 !important;
    font-weight: 700 !important
}

.cm-builtin {
    color: #fa6060 !important
}

kbd {
    display: inline-block;
    min-width: 1.6em;
    text-align: center;
    padding: 3px 6px;
    margin: 0 4px;
    font-family: SFMono-Regular, Consolas, "Liberation Mono", Menlo, Courier, monospace;
    font-size: .9em;
    line-height: 1.4;
    font-weight: 600;
    border-radius: 4px;
    background-color: #fff;
    color: var(--element-color-deep);
    border: 1px solid var(--element-color);
    border-bottom-width: 3px;
    box-shadow: 0 2px 0 var(--element-color-so-shallow);
    transition: all .15s cubic-bezier(.25, .8, .25, 1);
    transform: translateY(0)
}

kbd:hover {
    border-bottom-width: 1px;
    transform: translateY(2px);
    background-color: var(--element-color-soo-shallow);
    box-shadow: 0 0 0 transparent;
    color: var(--element-color-deep)
}

#write table {
    border-collapse: separate;
    border-spacing: 0;
    width: 100%;
    margin: 20px 0;
    border: 1px solid var(--element-color-shallow);
    border-radius: 8px;
    overflow: hidden;
    font-size: 14px;
    line-height: 1.6
}

#write table td,
#write table th {
    padding: 8px 12px;
    color: #333;
    border-right: 1px solid #f0f0f0;
    border-bottom: 1px solid #f0f0f0;
    transition: all .2s ease
}

#write table td:last-child,
#write table th:last-child {
    border-right: none
}

#write table tr:last-child td {
    border-bottom: none
}

#write table th {
    background-color: var(--element-color-soo-shallow);
    color: var(--element-color-deep);
    font-weight: 700;
    white-space: nowrap
}

#write table tbody tr:hover td {
    background-color: var(--element-color-soo-shallow)
}

#write table tbody td:hover {
    background-color: var(--element-color-soo-shallow);
    color: var(--element-color-deep);
    box-shadow: inset 0 0 0 1px var(--element-color-shallow);
    cursor: default
}

#write .footnote-word {
    font-weight: 400;
    color: #595959
}

#write .footnote-ref {
    font-weight: 400;
    color: #595959
}

#write .footnote-item em {
    font-size: 14px;
    color: #595959;
    display: block;
    background: 0 0
}

#write sup.md-footnote {
    font-size: 9px;
    padding: 1px 5px;
    top: -11px;
    left: 3px;
    background-color: rgba(238, 238, 238, .7);
    color: #555;
    border-radius: 50%;
    cursor: pointer
}

.md-alert {
    padding: 5px 10px;
    margin-bottom: 16px;
    color: #555;
    border: none !important;
    border-radius: 12px;
    position: relative;
    overflow: hidden;
    transition: transform .3s cubic-bezier(.34, 1.56, .64, 1), box-shadow .3s ease, background-color .3s ease
}

.md-alert:hover {
    transform: scale(1.01) translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, .08);
    z-index: 1
}

.md-alert-text-container {
    display: inline-flex;
    align-items: center;
    background-color: rgba(255, 255, 255, .7);
    backdrop-filter: blur(2px);
    padding: 2px 10px;
    border-radius: 50px;
    font-weight: 700;
    font-size: 14px;
    margin-bottom: 6px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, .03);
    position: relative;
    z-index: 2
}

.md-alert-text-container::after {
    margin-right: 0
}

.md-alert::after {
    content: "";
    position: absolute;
    right: -10px;
    bottom: -12px;
    font-family: "Segoe UI Emoji", "Apple Color Emoji", sans-serif;
    font-size: 64px;
    line-height: 1;
    opacity: .12;
    transform: rotate(-15deg);
    pointer-events: none;
    z-index: 0;
    transition: all .4s cubic-bezier(.34, 1.56, .64, 1)
}

.md-alert:hover::after {
    transform: rotate(0) scale(1.1);
    opacity: .2;
    right: 0;
    bottom: -4px
}

.md-alert-text svg {
    fill: currentColor;
    position: relative;
    top: 1px;
    margin-right: 5px;
    width: 1em;
    height: 1em
}

.md-alert.md-alert-note {
    background-color: rgba(108, 92, 231, .1)
}

.md-alert-text-note {
    color: #6c5ce7
}

.md-alert.md-alert-note:hover {
    background-color: rgba(108, 92, 231, .15)
}

.md-alert.md-alert-note::after {
    content: "📝"
}

.md-alert.md-alert-tip {
    background-color: rgba(0, 184, 148, .1)
}

.md-alert-text-tip {
    color: #00b894
}

.md-alert.md-alert-tip:hover {
    background-color: rgba(0, 184, 148, .15)
}

.md-alert.md-alert-tip::after {
    content: "💡"
}

.md-alert.md-alert-warning {
    background-color: rgba(253, 203, 110, .15)
}

.md-alert-text-warning {
    color: #e17055
}

.md-alert.md-alert-warning:hover {
    background-color: rgba(253, 203, 110, .2)
}

.md-alert.md-alert-warning::after {
    content: "⚠️"
}

.md-alert.md-alert-important {
    background-color: rgba(255, 118, 117, .12)
}

.md-alert-text-important {
    color: #ff7675
}

.md-alert.md-alert-important:hover {
    background-color: rgba(255, 118, 117, .18)
}

.md-alert.md-alert-important::after {
    content: "📌"
}

.md-alert.md-alert-caution {
    background-color: rgba(214, 48, 49, .08)
}

.md-alert-text-caution {
    color: #d63031
}

.md-alert.md-alert-caution:hover {
    background-color: rgba(214, 48, 49, .12)
}

.md-alert.md-alert-caution::after {
    content: "🔥"
}

.md-toc {
    margin: 20px;
    padding: 30px;
    background-color: rgba(255, 255, 255, .4);
    background-image: radial-gradient(circle at -22% -42%, var(--element-color-so-shallow), transparent 42%), radial-gradient(circle at 100% 170%, var(--element-color-shallow), transparent 42%);
    background-repeat: no-repeat;
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, .6);
    box-shadow: 0 8px 32px rgba(0, 0, 0, .05);
    border-radius: 16px;
    font-size: 15px;
    color: #555;
    position: relative;
    overflow: hidden;
    transition: transform .3s cubic-bezier(.34, 1.56, .64, 1), box-shadow .3s ease
}

.md-toc:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, .1)
}

.md-toc:before {
    content: "目录";
    display: block;
    text-align: center;
    font-size: 1.4rem;
    font-weight: 700;
    color: var(--element-color-deep);
    margin-bottom: 25px;
    letter-spacing: 2px;
    border-bottom: 1px dashed rgba(0, 0, 0, .08);
    padding-bottom: 15px
}

.md-toc-item {
    display: block;
    line-height: 1.8em;
    color: #666;
    text-decoration: none;
    padding: 6px 15px;
    border-radius: 50px;
    margin-bottom: 4px;
    position: relative;
    transition: all .2s cubic-bezier(.25, .8, .25, 1)
}

.md-toc-item a {
    text-decoration: none;
    color: inherit;
    display: block;
    width: 100%
}

.md-toc-h1 {
    font-weight: 600;
    color: #333;
    margin-top: 10px;
    background: rgba(255, 255, 255, .4)
}

.md-toc-h2 {
    margin-left: 1em;
    font-size: .95rem
}

.md-toc-h3 {
    margin-left: 2em;
    font-size: .9rem;
    color: #777
}

.md-toc-item:hover {
    background-color: rgba(255, 255, 255, .95);
    color: var(--element-color-deep);
    padding-left: 20px;
    font-weight: 500;
    box-shadow: 0 4px 12px rgba(0, 0, 0, .05)
}

.md-tooltip-hide>span {
    display: none
}

#typora-sidebar {
    height: 100%;
    color: var(--text-color);
    font-size: .92rem;
    background-color: var(--bg-color)
}

#outline-content::-webkit-scrollbar {
    width: 5px
}

#file-library::-webkit-scrollbar {
    width: 5px
}

::-webkit-scrollbar-track {
    border-radius: 10px
}

::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: var(--element-color)
}

::-webkit-scrollbar-thumb:active {
    background: var(--element-color-shallow)
}

::-webkit-scrollbar {
    width: 5px;
    height: 8px
}

.active-tab-files #info-panel-tab-file .info-panel-tab-border,
.active-tab-outline #info-panel-tab-outline .info-panel-tab-border,
.ty-show-search #info-panel-tab-search .info-panel-tab-border {
    border-radius: 10px;
    height: 4px;
    background-color: var(--appui-color)
}

.file-node-content {
    line-height: 1.2rem
}

.file-tree-node.active>.file-node-content {
    color: var(--appui-color)
}

span.file-node-title {
    color: var(--appui-color-text)
}

.file-node-icon {
    color: var(--appui-color-icon);
    padding-right: .2rem
}

.file-tree-node.active>.file-node-background {
    font-weight: bolder;
    border-left: 4px solid var(--appui-color);
    border-color: var(--appui-color)
}

.info-panel-tab-title {
    font-weight: bolder;
    color: var(--appui-color-text)
}

#file-library-search-panel {
    background-color: #fff
}

#file-library-search-input {
    border-radius: 3px;
    border-color: var(--appui-color)
}

#file-library-search-input:focus {
    border-width: 2px
}

#outline-content .outline-h2::after,
#outline-content .outline-h2>.outline-item::before {
    content: none !important;
    display: none !important;
    border: none !important;
    background: 0 0 !important
}

#outline-content .outline-label {
    border: none !important;
    background: 0 0 !important;
    padding-left: 0 !important;
    margin: 0 !important
}

#outline-content .outline-item {
    display: flex !important;
    align-items: center !important;
    width: fit-content;
    max-width: 100%;
    padding: 6px 12px;
    margin-bottom: 2px;
    color: inherit;
    cursor: pointer;
    text-decoration: none;
    border-radius: 50px;
    border: none;
    outline: 0;
    transition: background-color .2s ease, color .2s ease, padding-right .2s ease, box-shadow .2s ease;
    position: relative;
    line-height: 1.6
}

#outline-content .outline-expander {
    flex-shrink: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-right: 4px;
    color: inherit
}

#outline-content .outline-label {
    flex: 1;
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis
}

#outline-content .outline-h1 {
    margin-top: 10px;
    margin-bottom: 4px
}

#outline-content .outline-h2,
#outline-content .outline-h3,
#outline-content .outline-h4,
#outline-content .outline-h5,
#outline-content .outline-h6 {
    border-left: 1.5px solid rgba(0, 0, 0, .06);
    margin-left: 22px;
    padding-left: 8px
}

#outline-content .outline-h1>.outline-item {
    font-size: larger;
    font-weight: 700;
    color: var(--element-color-deep)
}

#outline-content .outline-item:hover {
    background-color: var(--element-color-soo-shallow);
    color: var(--element-color-deep);
    margin-left: 0 !important;
    margin-right: 0 !important;
    border-left: none !important;
    border-right: none !important
}

div.outline-item-active {
    background-color: var(--element-color) !important;
    color: #fff !important;
    font-weight: 600;
    box-shadow: 0 4px 10px var(--element-color-so-shallow);
    transform: none;
    padding-right: 30px !important;
    padding-left: 12px !important;
    margin-left: 0 !important;
    margin-right: 0 !important;
    border: none !important
}

#outline-content .outline-item-active::after {
    content: "✦";
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 10px;
    color: rgba(255, 255, 255, .9);
    display: block !important;
    z-index: 10;
    animation: outline-twinkle 1.5s infinite alternate
}

@keyframes outline-twinkle {
    from {
        opacity: .7;
        transform: translateY(-50%) scale(.9)
    }

    to {
        opacity: 1;
        transform: translateY(-50%) scale(1.1)
    }
}

.typora-export-content .outline-content::before {
    content: "目录";
    font-size: 20px;
    font-weight: 700;
    position: absolute;
    top: 22px;
    left: 15px;
    z-index: -1
}

.typora-export-sidebar .outline-content {
    padding-top: 60px !important;
    padding-left: 10px !important;
    height: 100%;
    overflow-y: auto;
    padding-bottom: 30px;
    box-sizing: border-box
}

.typora-export-sidebar .outline-content::before {
    content: "目录";
    font-size: 20px;
    font-weight: 700;
    color: var(--element-color-deep);
    position: absolute;
    top: 20px;
    left: 24px;
    z-index: 10;
    letter-spacing: 2px
}

.typora-export-sidebar .outline-h1 {
    margin-top: 10px !important;
    margin-bottom: 4px !important;
    margin-left: 0 !important
}

.typora-export-sidebar .outline-h1>.outline-item {
    font-size: 1.1em !important;
    font-weight: 700 !important;
    color: var(--element-color-deep) !important
}

.typora-export-sidebar .outline-h2,
.typora-export-sidebar .outline-h3,
.typora-export-sidebar .outline-h4,
.typora-export-sidebar .outline-h5,
.typora-export-sidebar .outline-h6 {
    border-left: 1.5px solid rgba(0, 0, 0, .06) !important;
    margin-left: 15px !important;
    padding-left: 8px !important;
    list-style: none !important
}

.typora-export-sidebar .outline-item {
    display: flex !important;
    align-items: center !important;
    width: fit-content !important;
    max-width: 95% !important;
    padding: 6px 12px !important;
    margin: 2px 0 !important;
    color: inherit !important;
    cursor: pointer;
    text-decoration: none !important;
    border-radius: 50px !important;
    border: none !important;
    transition: all .2s ease;
    line-height: 1.6;
    overflow: visible !important
}

.typora-export-sidebar .outline-label {
    padding: 0 !important;
    margin: 0 !important;
    border: none !important;
    text-decoration: none !important;
    color: inherit !important;
    flex: 0 1 auto !important;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis
}

.typora-export-sidebar .outline-expander {
    width: 16px !important;
    text-align: center;
    margin-right: 4px;
    flex-shrink: 0
}

.typora-export .outline-expander::before {
    content: "▸" !important;
    font-family: Arial, sans-serif !important;
    font-size: 14px !important;
    color: #999;
    top: 0 !important;
    display: inline-block;
    transition: transform .2s
}

.typora-export .outline-expander:hover::before,
.typora-export .outline-item-open>.outline-item>.outline-expander::before {
    content: "▾" !important;
    color: var(--element-color-deep)
}

.typora-export .outline-item-single .outline-expander::before {
    display: none !important
}

.typora-export-sidebar .outline-item:hover {
    background-color: var(--element-color-soo-shallow) !important;
    color: var(--element-color-deep) !important;
    margin-left: 0 !important;
    margin-right: 0 !important;
    border: none !important
}

.typora-export-sidebar .outline-item-wrapper.outline-item-active>.outline-item {
    background-color: var(--element-color) !important;
    color: #fff !important;
    font-weight: 600 !important;
    box-shadow: 0 4px 10px var(--element-color-so-shallow);
    padding-right: 12px !important;
    padding-left: 12px !important;
    margin-left: 0 !important;
    border: none !important
}

.typora-export-sidebar .outline-item-wrapper.outline-item-active>.outline-item .outline-label {
    color: #fff !important
}

.typora-export-sidebar .outline-item-wrapper.outline-item-active>.outline-item .outline-expander::before {
    color: rgba(255, 255, 255, .8) !important
}

.typora-export-sidebar .outline-item-wrapper.outline-item-active>.outline-item::after {
    content: "✦";
    position: static !important;
    transform: none !important;
    margin-left: 8px !important;
    flex-shrink: 0;
    display: inline-block !important;
    line-height: 1;
    font-size: 10px;
    font-family: Arial, sans-serif;
    color: rgba(255, 255, 255, .9);
    z-index: 10;
    animation: outline-twinkle 1.5s infinite alternate
}

@media screen {
    body.typora-export {
        background-color: transparent
    }
}

.typora-export-sidebar {
    position: fixed;
    margin-top: 0 !important;
    top: 10px;
    bottom: 10px;
    left: 20px;
    width: 320px;
    background-color: var(--glass-bg-color);
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, .6);
    border-radius: 20px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, .13);
    z-index: 100;
    overflow: hidden;
    color: #555;
    font-family: Optima-Regular, Optima, PingFangSC-light, PingFangTC-light, "PingFang SC", Cambria, Cochin, Georgia, Times, "Times New Roman", serif
}

.typora-export-sidebar .outline-content {
    padding-top: 60px !important;
    padding-left: 15px !important;
    padding-right: 5px !important;
    height: 100%;
    overflow-y: auto;
    scrollbar-width: none
}

.typora-export #write {
    margin-left: 350px;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-right: 20px;
    min-height: calc(100vh - 20px);
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, .1);
    padding: 60px 80px;
    width: auto;
    max-width: none
}

@media screen and (max-width:800px) {
    .typora-export-sidebar {
        display: none
    }

    .typora-export #write {
        margin: 0;
        border-radius: 0;
        width: 100%;
        box-shadow: none;
        padding: 20px
    }
}

@media print {
    @page {
        margin: 10mm;
        size: A4
    }

    body {
        background-color: transparent !important
    }

    body {
        margin: 0 !important;
        width: 100% !important
    }

    .typora-export #write {
        margin: 0 auto !important;
        padding: 0 !important;
        width: 100% !important;
        max-width: 100% !important;
        border: none !important;
        box-shadow: none !important;
        background: 0 0 !important
    }

    * {
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important
    }

    #write::before {
        display: block !important;
        opacity: .1 !important;
        top: 0 !important;
        left: 0 !important;
        width: 100% !important;
        height: 100% !important;
        -webkit-mask-image: var(--bg-style) !important;
        mask-image: var(--bg-style) !important;
        background-color: var(--element-color) !important;
        pointer-events: none;
        z-index: -1
    }

    p {
        line-height: 1.5rem
    }

    figure,
    pre {
        page-break-inside: avoid
    }

    ol,
    ul {
        page-break-inside: auto !important;
        break-inside: auto !important
    }

    li {
        page-break-inside: avoid;
        break-inside: avoid
    }

    pre {
        page-break-inside: auto !important;
        break-inside: auto !important;
        white-space: pre-wrap
    }

    blockquote {
        page-break-inside: auto !important;
        break-inside: auto !important
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        page-break-after: avoid !important;
        break-after: avoid !important;
        page-break-inside: avoid !important
    }

    p {
        orphans: 2;
        widows: 2
    }

    .md-toc {
        background-image: none
    }
}

@media print {
    .page-break {
        page-break-after: always;
        break-after: always;
        height: 0;
        display: block;
        visibility: hidden
    }
}`,ne=`@font-face {
    font-family: CascadiaCode;
    src: url(Cascadia-Code-Regular.ttf)
}

@font-face {
    font-family: LXGWWenKai;
    src: url(LXGWWenKai-Regular.ttf)
}

html {
    font-size: 16px;
    font-family: LXGWWenKai
}

#write {
    max-width: 950px;
    margin: 0 auto;
    padding: 15px;
    line-height: 2.25;
    color: var(--text-color);
    letter-spacing: 1.1px;
    word-break: break-word;
    word-wrap: break-word;
    text-align: left;
    position: relative;
    z-index: 0
}

#write::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    z-index: -1;
    background-color: var(--texture-mask-color);
    opacity: var(--texture-opacity);
    -webkit-mask-image: var(--bg-style);
    mask-image: var(--bg-style);
    -webkit-mask-size: 20px 20px;
    mask-size: 20px 20px;
    -webkit-mask-repeat: repeat;
    mask-repeat: repeat;
    -webkit-mask-position: center;
    mask-position: center
}

#write p {
    color: var(--text-color-secondary);
    margin: 0 10px;
    font-family: Optima-Regular, Optima, LXGWWenKai, PingFangSC-light, PingFangTC-light, "PingFang SC", Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
    font-size: 1rem;
    word-spacing: 2px
}

#write h3.md-heading:after,
h4.md-heading:after,
h5.md-heading:after,
h6.md-heading:after {
    content: " ";
    display: inline-block;
    height: 2em;
    width: 2em;
    vertical-align: top;
    margin-left: -2px;
    background-color: var(--primary-color);
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-position: center;
    -webkit-mask-size: 24px 24px;
    mask-repeat: no-repeat;
    mask-position: center;
    mask-size: 24px 24px
}

#write h3.md-heading:after {
    -webkit-mask-image: var(--h3-icon-shape);
    mask-image: var(--h3-icon-shape)
}

#write h4.md-heading:after {
    -webkit-mask-image: var(--h4-icon-shape);
    mask-image: var(--h4-icon-shape)
}

#write h5.md-heading:after {
    -webkit-mask-image: var(--h5-icon-shape);
    mask-image: var(--h5-icon-shape)
}

#write h6.md-heading:after {
    -webkit-mask-image: var(--h6-icon-shape);
    mask-image: var(--h6-icon-shape)
}

#write h1,
#write h2,
#write h3,
#write h4,
#write h5,
#write h6 {
    color: var(--text-color);
    transition: all .3s ease
}

#write h1,
#write h2,
#write h3,
#write h4,
#write h5,
#write h6 {
    color: var(--text-color);
    transition: all .3s ease
}

#write h1 {
    text-align: center;
    font-size: 1.8rem;
    margin: 15px auto;
    position: relative;
    width: fit-content;
    min-width: 120px;
    min-height: 1.4em;
    padding-bottom: 12px;
    border-bottom: none;
    cursor: text;
    transition: color .3s ease, transform .3s ease, text-shadow .3s ease
}

#write h1::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 40px;
    height: 4px;
    border-radius: 4px;
    background: var(--h1-underline-color);
    box-shadow: 0 0 5px rgba(255, 85, 85, .4);
    transform: translateX(-50%);
    transition: width .4s cubic-bezier(.25, .8, .25, 1), box-shadow .3s ease
}

#write h1:not(.md-focus):hover {
    transform: translateY(-2px);
    text-shadow: var(--glow-shadow-text)
}

#write h1.md-focus::after,
#write h1:focus::after,
#write h1:hover::after {
    width: 100%;
    box-shadow: 0 0 15px var(--h1-underline-color)
}

#write h2 {
    font-size: 1.4rem;
    width: fit-content;
    margin: 1rem 0;
    padding: 0 10px;
    border-radius: 8px;
    cursor: default;
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    background-color: rgba(255, 255, 255, .02);
    background-image: var(--h2-bg-image);
    background-repeat: no-repeat;
    border-top: 1px solid rgba(255, 255, 255, .08);
    border-left: 1px solid transparent;
    border-right: 1px solid transparent;
    transition: all .5s ease
}

#write h2.md-focus,
#write h2:focus,
#write h2:hover {
    color: var(--primary-color);
    background-image: var(--h2-bg-image-hover);
    border-bottom-color: var(--h2-border-bottom-hover);
    text-shadow: var(--glow-shadow-text);
    box-shadow: 0 4px 12px rgba(0, 0, 0, .2);
    transform: translateY(-1px)
}

#write h3 {
    position: relative;
    padding-left: 15px;
    font-size: 1.25rem;
    margin-top: 1rem 0;
    transition: padding-left .3s ease, color .3s ease
}

#write h3::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 4px;
    height: 16px;
    background: var(--primary-color);
    border-radius: 2px;
    transition: all .3s cubic-bezier(.25, .8, .25, 1);
    opacity: .8
}

#write h3.md-focus,
#write h3:focus,
#write h3:hover {
    color: var(--primary-color);
    padding-left: 20px;
    text-shadow: var(--glow-shadow-text)
}

#write h3.md-focus::before,
#write h3:focus::before,
#write h3:hover::before {
    height: 60%;
    opacity: 1;
    box-shadow: var(--glow-shadow-box)
}

#write h4 {
    margin: 20px 0;
    font-size: 1.15rem;
    display: flex;
    align-items: center
}

#write h4::before {
    content: "";
    margin-right: 10px;
    display: inline-block;
    background-color: var(--primary-color);
    width: 8px;
    height: 8px;
    border-radius: 50%;
    transition: all .3s ease
}

#write h4.md-focus,
#write h4:focus,
#write h4:hover {
    color: var(--primary-color);
    text-shadow: var(--glow-shadow-text);
    transform: translateX(5px)
}

#write h4.md-focus::before,
#write h4:focus::before,
#write h4:hover::before {
    transform: scale(1.2);
    box-shadow: var(--glow-shadow-box)
}

#write h5 {
    margin: 20px 0;
    font-size: 1.1rem;
    display: flex;
    align-items: center
}

#write h5::before {
    content: "";
    margin-right: 10px;
    display: inline-block;
    background-color: transparent;
    border: 1.5px solid var(--primary-color);
    width: 8px;
    height: 8px;
    border-radius: 50%;
    box-sizing: border-box;
    transition: all .3s ease
}

#write h5.md-focus,
#write h5:focus,
#write h5:hover {
    color: var(--primary-color);
    text-shadow: var(--glow-shadow-text);
    transform: translateX(5px)
}

#write h5.md-focus::before,
#write h5:focus::before,
#write h5:hover::before {
    background-color: transparent;
    border-color: var(--primary-color);
    box-shadow: var(--glow-shadow-box);
    transform: scale(1.2)
}

#write h6 {
    margin: 20px 0;
    font-size: 1.1rem;
    color: var(--text-color)
}

#write h6::before {
    content: "-";
    color: var(--primary-color);
    margin-right: 7px;
    display: inline-block;
    font-weight: 700;
    transition: all .3s ease
}

#write h6.md-focus,
#write h6:focus,
#write h6:hover {
    color: var(--primary-color);
    text-shadow: var(--glow-shadow-text);
    transform: translateX(5px)
}

#write h6.md-focus::before,
#write h6:focus::before,
#write h6:hover::before {
    text-shadow: var(--glow-shadow-text);
    transform: scaleX(1.5)
}

#write {
    counter-reset: h1
}

h1 {
    counter-reset: h2
}

h2 {
    counter-reset: h3
}

h3 {
    counter-reset: h4
}

h4 {
    counter-reset: h5
}

h5 {
    counter-reset: h6
}

.sidebar-content {
    counter-reset: h1
}

.outline-content {
    counter-reset: h1
}

.outline-h1 {
    counter-reset: h2
}

.outline-h2 {
    counter-reset: h3
}

.outline-h3 {
    counter-reset: h4
}

.outline-h4 {
    counter-reset: h5
}

.outline-h5 {
    counter-reset: h6
}

.md-toc-content {
    counter-reset: h1toc
}

.md-toc-h1 {
    counter-reset: h2toc
}

.md-toc-h2 {
    counter-reset: h3toc
}

.md-toc-h3 {
    counter-reset: h4toc
}

.md-toc-h4 {
    counter-reset: h5toc
}

.md-toc-h5 {
    counter-reset: h6toc
}

#write h1:before {
    counter-increment: h1;
    content: var(--autonum-h1)
}

#outline-content li.outline-h1>div>span.outline-label:before {
    counter-increment: h1;
    content: var(--autonum-h1)
}

.outline-content .outline-h1>.outline-item>.outline-label:before {
    counter-increment: h1;
    content: var(--autonum-h1)
}

#write span.md-toc-item.md-toc-h1>a:before {
    counter-increment: h1toc;
    content: var(--autonum-h1toc)
}

#write h2:before {
    counter-increment: h2;
    content: var(--autonum-h2);
    color: var(--head-title-h2-color)
}

.outline-content .outline-h2>.outline-item>.outline-label:before {
    counter-increment: h2;
    content: var(--autonum-h2)
}

li.outline-h2>div>a.outline-label:before {
    counter-increment: h2;
    content: var(--autonum-h2)
}

#write span.md-toc-item.md-toc-h2>a:before {
    counter-increment: h2toc;
    content: var(--autonum-h2toc)
}

#write h3>span:first-of-type::before {
    counter-increment: h3;
    content: var(--autonum-h3);
    color: var(--element-color)
}

#outline-content li.outline-h3>div>span.outline-label:before {
    counter-increment: h3;
    content: var(--autonum-h3)
}

.outline-content .outline-h3>.outline-item>.outline-label:before {
    counter-increment: h3;
    content: var(--autonum-h3)
}

#write span.md-toc-item.md-toc-h3>a:before {
    counter-increment: h3toc;
    content: var(--autonum-h3toc)
}

#write h4>span:first-of-type::before {
    counter-increment: h4;
    content: var(--autonum-h4);
    color: var(--element-color)
}

#outline-content li.outline-h4>div>span.outline-label:before {
    counter-increment: h4;
    content: var(--autonum-h4)
}

.outline-content .outline-h4>.outline-item>.outline-label:before {
    counter-increment: h4;
    content: var(--autonum-h4)
}

#write span.md-toc-item.md-toc-h4>a:before {
    counter-increment: h4toc;
    content: var(--autonum-h4toc)
}

#write h5>span:first-of-type::before {
    counter-increment: h5;
    content: var(--autonum-h5);
    color: var(--element-color)
}

#outline-content li.outline-h5>div>span.outline-label:before {
    counter-increment: h5;
    content: var(--autonum-h5)
}

.outline-content .outline-h5>.outline-item>.outline-label:before {
    counter-increment: h5;
    content: var(--autonum-h5)
}

#write span.md-toc-item.md-toc-h5>a:before {
    counter-increment: h5toc;
    content: var(--autonum-h5toc)
}

#write h6>span:first-of-type::before {
    counter-increment: h6;
    content: var(--autonum-h6);
    color: var(--element-color)
}

#outline-content li.outline-h6>div>span.outline-label:before {
    counter-increment: h6;
    content: var(--autonum-h6)
}

.outline-content .outline-h6>.outline-item>.outline-label:before {
    counter-increment: h6;
    content: var(--autonum-h6)
}

#write span.md-toc-item.md-toc-h6>a:before {
    counter-increment: h6toc;
    content: var(--autonum-h6toc)
}

::marker {
    color: var(--primary-color)
}

li.md-list-item {
    margin: .4rem 0
}

#write ol,
#write ul {
    margin-top: 0;
    margin-left: 16px;
    margin-bottom: 8px;
    padding-left: 13px
}

#write em {
    padding: 0 3px 0 0
}

#write ul {
    list-style-type: disc
}

#write ul ul {
    list-style-type: circle
}

#write ul ul ul {
    list-style-type: square
}

#write ol {
    list-style-type: decimal
}

#write ol ol {
    list-style-type: lower-alpha
}

#write ol ol ol {
    list-style-type: lower-roman
}

#write li section {
    margin-top: 5px;
    margin-bottom: 5px;
    line-height: 1.7rem;
    text-align: justify;
    color: #000;
    font-weight: 500
}

#write li:before {
    content: "";
    height: calc(100% - 50px);
    top: 35px;
    position: absolute;
    border-left: .5px solid var(--primary-color);
    left: -13.5px
}

#write li.task-list-item:before {
    left: -6.5px
}

@keyframes task-pulse {
    0% {
        transform: scale(1)
    }

    50% {
        transform: scale(1.15)
    }

    100% {
        transform: scale(1)
    }
}

.task-list-item {
    position: relative
}

.task-list-item input {
    width: 1.25rem;
    height: 1.25rem;
    display: block;
    -webkit-appearance: initial;
    appearance: initial;
    position: absolute;
    top: 9px;
    left: -19px;
    margin: 0;
    cursor: pointer;
    outline: 0;
    z-index: 1
}

.task-list-item input::before {
    content: ' ';
    display: block;
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
    background: rgba(0, 0, 0, .2);
    border: 2px solid rgba(255, 255, 255, .2);
    transition: all .3s cubic-bezier(.175, .885, .32, 1.4);
    box-sizing: border-box
}

.task-list-item input:checked::before {
    border: 1px solid var(--primary-color);
    background: rgba(255, 85, 85, .2);
    box-shadow: 0 0 8px var(--primary-color), inset 0 0 5px rgba(255, 85, 85, .5);
    animation: task-pulse .4s forwards
}

.task-list-item input::after {
    content: ' ';
    position: absolute;
    top: .325rem;
    left: .28125rem;
    width: .6375rem;
    height: .4rem;
    border: 2.5px solid #fff;
    border-top: 0;
    border-right: 0;
    transform: rotate(-45deg) scale(0);
    opacity: 0;
    transition: all .3s cubic-bezier(.175, .885, .32, 1.4)
}

.task-list-item input:checked::after {
    opacity: 1;
    transform: rotate(-45deg) scale(1);
    text-shadow: 0 0 5px #fff
}

.task-list-item p {
    position: relative;
    display: inline;
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;
    background-image: linear-gradient(#888, #888);
    background-position: 0 50%;
    background-size: 0 1.5px;
    background-repeat: no-repeat;
    transition: background-size .4s cubic-bezier(.25, .8, .25, 1), color .4s ease, opacity .4s ease;
    text-decoration: none !important
}

.task-list-item input:checked+p {
    color: #888;
    opacity: .6;
    background-size: 100% 1.5px
}

.task-list-item input:checked+p span {
    color: #888;
    transition: color .4s ease
}

#write blockquote {
    position: relative;
    margin: 20px 0;
    padding: 18px 20px 18px 48px;
    color: var(--text-color-secondary);
    background-color: rgba(0, 0, 0, .2);
    border: 1px solid color-mix(in srgb, var(--secondary-color), transparent 70%);
    border-radius: 16px;
    transition: all .3s ease
}

#write blockquote::before {
    content: "💡";
    position: absolute;
    left: 10px;
    top: 2px;
    font-size: 20px;
    filter: grayscale(1);
    opacity: .8;
    transform: rotate(30deg);
    transition: all .3s cubic-bezier(.34, 1.56, .64, 1)
}

#write blockquote p {
    color: var(--text-color-secondary);
    margin-bottom: .5em
}

#write blockquote p:last-child {
    margin-bottom: 0
}

#write blockquote.md-focus,
#write blockquote:active,
#write blockquote:focus,
#write blockquote:hover {
    border-color: var(--primary-color);
    background-color: color-mix(in srgb, var(--hover-background-color), transparent 95%);
    box-shadow: 0 0 15px color-mix(in srgb, var(--hover-background-color), transparent 90%), inset 0 0 10px color-mix(in srgb, var(--hover-background-color), transparent 95%);
    transform: scale(1.01)
}

#write blockquote.md-focus::before,
#write blockquote:focus::before,
#write blockquote:hover::before {
    filter: grayscale(0);
    opacity: 1;
    transform: rotate(0);
    text-shadow: 0 0 10px var(--primary-color)
}

#write a {
    color: var(--primary-color);
    text-decoration: none;
    font-weight: 500;
    padding: 2px 4px;
    margin: 0 -2px;
    border-radius: 4px;
    background: 0 0;
    border-bottom: none;
    transition: all .2s ease
}

#write p a:not(.md-toc-inner)::before {
    content: '';
    display: inline-block;
    width: 1em;
    height: 1em;
    margin-right: 4px;
    vertical-align: -.15em;
    background-color: var(--primary-color);
    -webkit-mask: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1024 1024'%3E%3Cpath d='M477.934459 330.486594A50.844091 50.844091 0 0 1 406.752731 258.796425L512 152.532274a254.220457 254.220457 0 0 1 359.467726 359.467726L762.66137 618.772592a50.844091 50.844091 0 1 1-71.690168-71.690169l106.772591-106.772592a152.532274 152.532274 0 0 0-215.578947-215.578947z m70.164846 361.501489A50.844091 50.844091 0 1 1 619.789474 762.66137l-107.281033 107.281033A254.220457 254.220457 0 0 1 152.532274 512L259.813307 406.752731a50.844091 50.844091 0 1 1 72.19861 69.656405l-107.789474 107.281033a152.532274 152.532274 0 0 0 215.578947 215.578947z m-126.601788-16.77855a50.844091 50.844091 0 1 1-71.690168-71.690169l251.678252-251.678252a50.844091 50.844091 0 0 1 71.690169 71.690169z'/%3E%3C/svg%3E") no-repeat center/contain;
    mask: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1024 1024'%3E%3Cpath d='M477.934459 330.486594A50.844091 50.844091 0 0 1 406.752731 258.796425L512 152.532274a254.220457 254.220457 0 0 1 359.467726 359.467726L762.66137 618.772592a50.844091 50.844091 0 1 1-71.690168-71.690169l106.772591-106.772592a152.532274 152.532274 0 0 0-215.578947-215.578947z m70.164846 361.501489A50.844091 50.844091 0 1 1 619.789474 762.66137l-107.281033 107.281033A254.220457 254.220457 0 0 1 152.532274 512L259.813307 406.752731a50.844091 50.844091 0 1 1 72.19861 69.656405l-107.789474 107.281033a152.532274 152.532274 0 0 0 215.578947 215.578947z m-126.601788-16.77855a50.844091 50.844091 0 1 1-71.690168-71.690169l251.678252-251.678252a50.844091 50.844091 0 0 1 71.690169 71.690169z'/%3E%3C/svg%3E") no-repeat center/contain;
    transition: transform .4s cubic-bezier(.25, .8, .25, 1)
}

#write a:not(.md-toc-inner):hover {
    color: #fff;
    background: 0 0;
    text-shadow: 0 0 5px var(--primary-color), 0 0 10px var(--primary-color);
    box-shadow: none
}

#write a:hover:not(.md-toc-inner)::before {
    transform: rotate(180deg);
    background-color: #fff
}

#write a:visited {
    color: var(--primary-color);
    text-shadow: 0 0 5px rgba(255, 85, 85, .6), 0 0 10px rgba(255, 85, 85, .3);
    opacity: .9
}

#write a:visited:hover {
    color: #fff;
    text-shadow: 0 0 5px var(--primary-color), 0 0 10px var(--primary-color);
    opacity: 1
}

#write sup a::before {
    content: none
}

#write mark {
    background-color: transparent;
    color: var(--secondary-color);
    font-weight: 700;
    padding: 0 4px;
    margin: 0 2px;
    border-radius: 4px;
    position: relative;
    text-shadow: var(--glow-shadow-box);
    transition: all .3s ease;
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone
}

#write mark::after,
#write mark::before {
    content: none
}

#write mark:hover {
    color: #fff;
    background-color: rgba(255, 85, 85, .2);
    text-shadow: 0 0 1px #fff, 0 0 5px #fff, 0 0 15px var(--primary-color), 0 0 30px var(--primary-color);
    box-shadow: 0 0 15px rgba(255, 85, 85, .3);
    transform: scale(1.05)
}

#write strong {
    color: var(--primary-color);
    font-weight: 700;
    display: inline-block;
    transition: transform .2s cubic-bezier(.5, 1.5, .5, 1)
}

#write strong:hover {
    transform: translateY(-2px) scale(1.1);
    text-shadow: 0 0 10px var(--primary-color)
}

#write em {
    font-style: italic;
    color: var(--secondary-color);
    padding: 0 2px;
    transition: all .3s ease
}

#write em:hover {
    color: var(--primary-color);
    text-decoration: underline wavy var(--primary-color);
    text-underline-offset: 4px;
    text-shadow: var(--glow-shadow-box)
}

#write del {
    text-decoration: line-through;
    text-decoration-color: var(--primary-color);
    color: #888;
    transition: all .3s ease
}

#write del:hover {
    opacity: 1;
    color: var(--primary-color);
    text-decoration-color: var(--secondary-color);
    cursor: not-allowed
}

#write hr {
    border: none;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--primary-color), transparent);
    margin: 40px 0;
    position: relative;
    overflow: visible;
    opacity: .5;
    transition: all .3s ease
}

#write hr::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    width: 8px;
    height: 8px;
    border: 2px solid var(--primary-color);
    background: var(--bg-color);
    transition: all .3s ease
}

#write hr:hover {
    opacity: 1;
    background: linear-gradient(90deg, transparent, var(--primary-color), transparent)
}

#write hr:hover::after {
    border-color: var(--primary-color);
    background-color: var(--primary-color);
    box-shadow: 0 0 10px var(--primary-color);
    transform: translate(-50%, -50%) rotate(225deg) scale(1.5)
}

#write p:has(img) {
    text-align: center
}

#write img {
    border-radius: 12px;
    display: inline-block;
    margin: 15px 5px;
    object-fit: contain;
    filter: brightness(1) contrast(1);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, .05);
    transition: all .4s cubic-bezier(.34, 1.56, .64, 1);
    max-width: 100%;
    cursor: zoom-in
}

#write p>img:only-child {
    display: block;
    margin: 20px auto
}

#write img:hover {
    filter: brightness(1.05) contrast(1.05);
    transform: scale(1.05);
    box-shadow: 0 12px 30px -4px var(--element-color-soo-shallow);
    z-index: 10
}

#write figcaption {
    display: block;
    margin-top: 12px;
    font-size: 13px;
    color: #888;
    text-align: center;
    line-height: 1.5;
    font-family: LXGWWenKai, -apple-system, sans-serif;
    transition: color .3s ease
}

#write figure:hover>figcaption,
#write p:hover>img+figcaption {
    color: var(--element-color-deep)
}

pre.md-meta-block {
    padding: 30px 20px 20px;
    margin: 20px 0;
    font-family: CascadiaCode, "Lucida Console", Consolas, Courier, monospace;
    font-size: 13px;
    color: var(--text-color-secondary);
    line-height: 1.6;
    background-color: color-mix(in srgb, var(--primary-color), transparent 98%);
    border: 1.5px dashed color-mix(in srgb, var(--primary-color), transparent 60%);
    border-radius: 8px;
    position: relative;
    transition: all .3s cubic-bezier(.25, .8, .25, 1)
}

pre.md-meta-block::after {
    content: "YAML";
    position: absolute;
    top: 0;
    right: 20px;
    background-color: var(--primary-color);
    color: #fff;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 1px;
    padding: 4px 12px;
    border-radius: 0 0 6px 6px;
    box-shadow: 0 2px 10px color-mix(in srgb, var(--primary-color), transparent 70%);
    pointer-events: none;
    transition: all .3s ease
}

pre.md-meta-block:hover {
    background-color: color-mix(in srgb, var(--primary-color), transparent 92%);
    border-style: solid;
    border-color: var(--primary-color);
    box-shadow: 0 5px 20px color-mix(in srgb, var(--primary-color), transparent 85%), inset 0 0 20px color-mix(in srgb, var(--primary-color), transparent 95%);
    transform: translateY(-2px)
}

pre.md-meta-block:hover::after {
    padding-top: 8px;
    box-shadow: 0 0 15px var(--primary-color)
}

#write code:not(.md-fencescode) {
    font-family: CascadiaCode, "Lucida Console", Consolas, Courier, monospace;
    font-size: .9em;
    letter-spacing: .5px;
    background-color: color-mix(in srgb, var(--primary-color), transparent 90%);
    color: var(--primary-color);
    border: 1px solid color-mix(in srgb, var(--primary-color), transparent 85%);
    padding: 2px 6px;
    margin: 0 2px;
    border-radius: 6px;
    vertical-align: middle;
    transition: all .2s cubic-bezier(.34, 1.56, .64, 1)
}

#write code:not(.md-fencescode):hover {
    background-color: var(--primary-color);
    color: #fff;
    border-color: var(--primary-color);
    box-shadow: 0 0 15px color-mix(in srgb, var(--primary-color), transparent 60%);
    transform: scale(1.05);
    text-decoration: none
}

svg[id^=mermaid] {
    font-family: "Cascadia Code", "HarmonyOS Sans SC", sans-serif !important;
    max-width: 100% !important
}

.node circle,
.node ellipse,
.node path,
.node rect {
    fill: color-mix(in srgb, var(--primary-color), transparent 90%) !important;
    stroke: var(--primary-color) !important;
    stroke-width: 1.5px !important
}

.node polygon {
    fill: color-mix(in srgb, var(--secondary-color), transparent 85%) !important;
    stroke: var(--secondary-color) !important;
    stroke-width: 1.5px !important
}

.edgePath .path,
.flowchart-link {
    stroke: #e0e0e0 !important;
    stroke-width: 1.5px !important;
    opacity: 1 !important
}

.marker path,
marker path {
    fill: #e0e0e0 !important;
    stroke: #e0e0e0 !important
}

.cluster-label text,
.edgeLabel,
.edgeLabel .label,
.edgeLabel div,
.edgeLabel p,
.edgeLabel span,
.labelBkg,
.node .label {
    background: #2e2e2e !important;
    color: #fff !important;
    fill: #fff !important;
    font-weight: 500 !important;
    text-shadow: 0 0 4px rgba(0, 0, 0, .8) !important
}

.edgeLabel rect {
    fill: var(--bg-color) !important;
    opacity: 1 !important
}

.labelBkg {
    background-color: var(--bg-color) !important;
    opacity: 1 !important;
    border-radius: 4px;
    padding: 0 4px
}

.cluster rect {
    fill: rgba(255, 255, 255, .02) !important;
    stroke: rgba(255, 255, 255, .1) !important
}

.md-fences:not([lang=mermaid])::before {
    content: attr(lang);
    font-family: CascadiaCode, "Lucida Console", Consolas, Courier, monospace;
    text-align: right;
    padding-right: 15px;
    color: #6272a4;
    display: block;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNDUwcHgiIGhlaWdodD0iMTMwcHgiPgogIDxlbGxpcHNlIGN4PSI2NSIgY3k9IjY1IiByeD0iNTAiIHJ5PSI1MiIgc3Ryb2tlPSJyZ2IoMjIwLDYwLDU0KSIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJyZ2IoMjM3LDEwOCw5NikiLz4KICA8ZWxsaXBzZSBjeD0iMjI1IiBjeT0iNjUiIHJ4PSI1MCIgcnk9IjUyIiAgc3Ryb2tlPSJyZ2IoMjE4LDE1MSwzMykiIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0icmdiKDI0NywxOTMsODEpIi8+CiAgPGVsbGlwc2UgY3g9IjM4NSIgY3k9IjY1IiByeD0iNTAiIHJ5PSI1MiIgIHN0cm9rZT0icmdiKDI3LDE2MSwzNykiIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0icmdiKDEwMCwyMDAsODYpIi8+Cjwvc3ZnPg==);
    background-repeat: no-repeat;
    background-size: 40px;
    background-position: 12px 11px;
    height: 32px;
    width: 100%;
    border-radius: 8px 8px 0 0;
    margin-bottom: 0;
    background-color: color-mix(in srgb, var(--secondary-color), transparent 95%);
    border-bottom: 1px solid color-mix(in srgb, var(--secondary-color), transparent 90%);
    transition: all .3s ease
}

.CodeMirror-wrap .CodeMirror-scroll {
    overflow-x: auto
}

.md-fences {
    position: relative;
    z-index: 1;
    overflow: visible;
    margin: 20px 0;
    border-radius: 8px;
    box-shadow: none;
    background-color: #282a36;
    border: 1px solid color-mix(in srgb, var(--secondary-color), transparent 80%);
    transition: border-color .3s ease
}

.md-fences.md-focus {
    z-index: 100;
    border-color: var(--primary-color);
    box-shadow: none
}

.md-fences.md-focus:not([lang=mermaid])::before {
    background-color: color-mix(in srgb, var(--primary-color), transparent 95%);
    border-bottom-color: color-mix(in srgb, var(--primary-color), transparent 80%)
}

.md-fences .cm-s-inner.CodeMirror {
    margin-top: 0
}

.cm-s-inner.CodeMirror {
    padding: 20px 12px 12px 20px;
    color: #f8f8f2;
    font-family: CascadiaCode, "Lucida Console", Consolas, Courier, monospace;
    border-radius: 0 0 8px 8px;
    background-color: #282a36;
    line-height: 1.6rem;
    font-size: .95rem
}

.CodeMirror-gutters {
    border-right: 1px solid #44475a;
    background: #282a36;
    white-space: nowrap
}

pre.CodeMirror-line {
    padding: 0 1.2rem
}

.CodeMirror-linenumber {
    padding: 0 3px 0 5px;
    text-align: right;
    color: #6272a4
}

.cm-keyword {
    color: var(--code-keyword) !important;
    font-weight: 700 !important
}

.cm-variable {
    color: var(--code-variable) !important
}

.cm-tag {
    color: var(--code-keyword) !important;
    font-weight: 700 !important
}

.cm-variable-2 {
    color: var(--code-function) !important
}

.cm-variable-3 {
    color: var(--code-param) !important
}

.cm-def {
    color: var(--code-function) !important
}

.cm-attribute {
    color: var(--code-function) !important
}

.cm-comment,
.md-comment,
.md-meta {
    color: var(--code-comment) !important;
    font-style: italic
}

.cm-string {
    color: var(--code-string) !important;
    font-variant-ligatures: common-ligatures !important
}

.cm-link {
    color: var(--code-type) !important;
    text-decoration: underline
}

.cm-type {
    color: var(--code-type) !important;
    font-style: italic
}

.cm-property {
    color: var(--code-property) !important
}

.cm-tag:not(.cm-bracket) {
    font-weight: 700 !important
}

.cm-operator {
    color: var(--code-keyword) !important
}

.cm-number {
    color: var(--code-number) !important
}

.cm-meta {
    color: var(--code-meta) !important
}

.cm-builtin {
    color: var(--code-type) !important;
    font-style: italic
}

.CodeMirror-selected,
.CodeMirror-selectedtext {
    background: var(--code-selected-bg) !important
}

#write kbd {
    background-color: #333;
    color: var(--text-color);
    font-family: CascadiaCode, "Lucida Console", Consolas, Courier, monospace;
    font-size: .9em;
    padding: 4px 8px;
    border-radius: 6px;
    border: 1px solid #444;
    border-top-color: #555;
    border-bottom-color: #222;
    box-shadow: 0 4px 0 #222, 0 5px 5px rgba(0, 0, 0, .4);
    transition: all .1s ease;
    display: inline-block;
    line-height: 1;
    margin: 0 4px;
    vertical-align: middle
}

#write kbd:hover {
    transform: translateY(2px);
    box-shadow: 0 2px 0 #222, 0 3px 3px rgba(0, 0, 0, .4);
    color: var(--primary-color);
    border-color: var(--primary-color)
}

#write table {
    border-collapse: separate;
    border-spacing: 0;
    width: 100%;
    margin: 0;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    overflow: hidden;
    background-color: rgba(255, 255, 255, .02);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    font-size: 14px;
    line-height: 1.6
}

#write table td,
#write table th {
    padding: 10px 15px;
    color: var(--text-color);
    border-right: 1px solid color-mix(in srgb, #fff, transparent 95%);
    border-bottom: 1px solid color-mix(in srgb, #fff, transparent 95%);
    transition: all .2s ease
}

#write table td:last-child,
#write table th:last-child {
    border-right: none
}

#write table tr:last-child td {
    border-bottom: none
}

#write table th {
    background-color: color-mix(in srgb, var(--primary-color), transparent 95%);
    color: var(--primary-color);
    font-weight: 700;
    white-space: nowrap;
    border-bottom: 1px solid color-mix(in srgb, var(--primary-color), transparent 85%)
}

#write table tbody tr:hover td {
    background-color: rgba(255, 255, 255, .03)
}

#write table tbody td:hover {
    background-color: color-mix(in srgb, var(--primary-color), transparent 85%);
    color: #fff;
    box-shadow: inset 0 0 0 1px var(--primary-color);
    text-shadow: 0 0 8px var(--primary-color);
    cursor: default
}

#write .footnote-word {
    font-weight: 400;
    color: #888
}

#write .footnote-ref {
    font-weight: 700;
    color: var(--accent-color);
    cursor: pointer;
    margin-left: 2px
}

#write .footnote-item em {
    font-size: 14px;
    color: #888;
    font-style: italic;
    display: block;
    background: 0 0
}

.md-alert {
    padding: 12px 16px;
    margin-bottom: 16px;
    color: var(--text-color);
    border: 1px solid transparent;
    border-radius: 12px;
    background-color: rgba(255, 255, 255, .02);
    position: relative;
    overflow: hidden;
    transition: transform .3s cubic-bezier(.34, 1.56, .64, 1), box-shadow .3s ease, border-color .3s ease, background-color .3s ease
}

.md-alert-text-container {
    display: inline-flex;
    align-items: center;
    margin-bottom: 8px;
    font-weight: 700;
    font-size: 14px;
    position: relative;
    z-index: 2;
    background-color: rgba(255, 255, 255, .06);
    border: 1px solid rgba(255, 255, 255, .1);
    padding: 4px 10px;
    border-radius: 50px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, .1)
}

.md-alert-text-container span {
    background: 0 0;
    padding: 0;
    box-shadow: none;
    color: inherit
}

.md-alert-text svg {
    fill: currentColor;
    position: relative;
    top: 1px;
    margin-right: 5px;
    width: 1em;
    height: 1em
}

.md-alert::after {
    content: "";
    position: absolute;
    right: -10px;
    bottom: -15px;
    font-family: "Segoe UI Emoji", "Apple Color Emoji", sans-serif;
    font-size: 64px;
    line-height: 1;
    opacity: .15;
    transform: rotate(-15deg);
    pointer-events: none;
    z-index: 0;
    filter: grayscale(100%);
    text-shadow: 0 0 10px currentColor;
    transition: transform .4s cubic-bezier(.34, 1.56, .64, 1), opacity .4s ease, right .4s ease, bottom .4s ease, filter .4s ease, text-shadow .4s ease
}

.md-alert:hover {
    transform: scale(1.01) translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, .2);
    z-index: 1
}

.md-alert:hover::after {
    transform: rotate(0) scale(1.1);
    opacity: .25;
    right: 5px;
    bottom: -5px;
    filter: grayscale(0);
    text-shadow: 0 0 25px currentColor
}

.md-alert.md-alert-note {
    border-color: rgba(189, 147, 249, .3);
    background-color: rgba(189, 147, 249, .05)
}

.md-alert.md-alert-note:hover {
    box-shadow: 0 4px 20px rgba(189, 147, 249, .15);
    border-color: var(--secondary-color)
}

.md-alert.md-alert-note .md-alert-text-container {
    color: var(--secondary-color)
}

.md-alert.md-alert-note::after {
    content: "📝";
    color: var(--secondary-color)
}

.md-alert.md-alert-tip {
    border-color: rgba(139, 233, 253, .3);
    background-color: rgba(139, 233, 253, .05)
}

.md-alert.md-alert-tip:hover {
    box-shadow: 0 4px 20px rgba(139, 233, 253, .15);
    border-color: var(--accent-color)
}

.md-alert.md-alert-tip .md-alert-text-container {
    color: var(--accent-color)
}

.md-alert.md-alert-tip::after {
    content: "💡";
    color: var(--accent-color)
}

.md-alert.md-alert-warning {
    border-color: rgba(255, 184, 108, .3);
    background-color: rgba(255, 184, 108, .05)
}

.md-alert.md-alert-warning:hover {
    box-shadow: 0 4px 20px rgba(255, 184, 108, .15);
    border-color: #ffb86c
}

.md-alert.md-alert-warning .md-alert-text-container {
    color: #ffb86c
}

.md-alert.md-alert-warning::after {
    content: "⚠️";
    color: #ffb86c
}

.md-alert.md-alert-important {
    border-color: rgba(255, 85, 85, .3);
    background-color: rgba(255, 85, 85, .05)
}

.md-alert.md-alert-important:hover {
    box-shadow: 0 4px 20px rgba(255, 85, 85, .15);
    border-color: var(--primary-color)
}

.md-alert.md-alert-important .md-alert-text-container {
    color: var(--primary-color)
}

.md-alert.md-alert-important::after {
    content: "🔥";
    color: var(--primary-color)
}

.md-alert.md-alert-caution {
    border-color: rgba(214, 48, 49, .3);
    background-color: rgba(214, 48, 49, .05)
}

.md-alert.md-alert-caution:hover {
    box-shadow: 0 4px 20px rgba(214, 48, 49, .15);
    border-color: #d63031
}

.md-alert.md-alert-caution .md-alert-text-container {
    color: #d63031
}

.md-alert.md-alert-caution::after {
    content: "💀";
    color: #d63031
}

.md-toc {
    margin: 20px 0;
    padding: 30px;
    background-color: rgba(255, 255, 255, .02);
    background-image: radial-gradient(circle at 0 0, color-mix(in srgb, var(--primary-color), transparent 90%), transparent 40%), radial-gradient(circle at 100% 100%, color-mix(in srgb, var(--secondary-color), transparent 90%), transparent 40%);
    background-repeat: no-repeat;
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, .05);
    box-shadow: 0 8px 32px rgba(0, 0, 0, .2);
    border-radius: 16px;
    font-family: "HarmonyOS Sans SC", sans-serif;
    font-size: 15px;
    color: var(--text-color-secondary);
    position: relative;
    overflow: hidden;
    transition: transform .3s cubic-bezier(.34, 1.56, .64, 1), box-shadow .3s ease
}

.md-toc:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, .4);
    border-color: color-mix(in srgb, var(--primary-color), transparent 80%)
}

.md-toc:before {
    content: "目录";
    display: block;
    text-align: center;
    font-size: 1.4rem;
    font-weight: 700;
    color: var(--primary-color);
    margin-bottom: 25px;
    letter-spacing: 2px;
    border-bottom: 1px dashed rgba(255, 255, 255, .1);
    padding-bottom: 15px;
    text-shadow: 0 0 10px color-mix(in srgb, var(--primary-color), transparent 70%)
}

.md-toc-item {
    display: block;
    line-height: 1.8em;
    color: var(--text-color-secondary);
    text-decoration: none;
    padding: 6px 15px;
    border-radius: 8px;
    margin-bottom: 4px;
    position: relative;
    transition: all .2s ease;
    cursor: pointer
}

.md-toc-item a {
    text-decoration: none;
    color: inherit;
    display: block;
    width: 100%;
    border-bottom: none
}

.md-toc-h1 {
    margin-top: 10px;
    font-weight: 600
}

.md-toc-h2 {
    margin-left: 1.5em;
    font-size: .95em
}

.md-toc-h3 {
    margin-left: 3em;
    font-size: .9em;
    opacity: .8
}

.md-toc-item:hover {
    background-color: color-mix(in srgb, var(--primary-color), transparent 90%);
    color: #fff;
    padding-left: 20px;
    font-weight: 500;
    box-shadow: 0 4px 12px rgba(0, 0, 0, .1);
    text-shadow: 0 0 5px var(--primary-color)
}

.md-tooltip-hide>span {
    display: none
}

#typora-sidebar {
    height: 100%;
    color: var(--text-color-secondary);
    font-size: .92rem;
    background-color: #191a21;
    border-right: 1px solid rgba(255, 255, 255, .05)
}

.file-node-content {
    line-height: 1.8rem;
    padding-top: 0;
    padding-bottom: 0
}

.file-tree-node.active>.file-node-background {
    background-image: linear-gradient(90deg, color-mix(in srgb, var(--primary-color), transparent 85%), transparent);
    background-color: transparent;
    border-left: 3px solid var(--primary-color);
    border-color: var(--primary-color);
    box-shadow: inset 2px 0 10px color-mix(in srgb, var(--primary-color), transparent 80%)
}

.file-tree-node.active>.file-node-content {
    color: #fff;
    font-weight: 700
}

.file-node-content:hover {
    background-color: rgba(255, 255, 255, .03)
}

.file-node-icon {
    color: var(--secondary-color);
    padding-right: .2rem;
    opacity: .7
}

.file-tree-node.active .file-node-icon {
    color: var(--primary-color);
    opacity: 1
}

.info-panel-tab-title {
    font-weight: 600;
    color: var(--text-color-secondary)
}

.active-tab-files #info-panel-tab-file .info-panel-tab-border,
.active-tab-outline #info-panel-tab-outline .info-panel-tab-border,
.ty-show-search #info-panel-tab-search .info-panel-tab-border {
    height: 2px;
    background-color: var(--primary-color);
    box-shadow: 0 0 8px var(--primary-color)
}

#file-library-search-panel {
    background-color: #191a21;
    border-bottom: 1px solid rgba(255, 255, 255, .05)
}

#file-library-search-input {
    background-color: rgba(0, 0, 0, .2);
    color: var(--text-color);
    border: 1px solid rgba(255, 255, 255, .1);
    border-radius: 4px
}

#file-library-search-input:focus {
    border-color: var(--primary-color);
    box-shadow: 0 0 5px color-mix(in srgb, var(--primary-color), transparent 80%)
}

#file-library::-webkit-scrollbar,
#outline-content::-webkit-scrollbar {
    width: 4px
}

::-webkit-scrollbar-track {
    background: 0 0
}

::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background: color-mix(in srgb, var(--primary-color), transparent 70%)
}

::-webkit-scrollbar-thumb:active,
::-webkit-scrollbar-thumb:hover {
    background: var(--primary-color);
    box-shadow: 0 0 5px var(--primary-color)
}

.context-menu .menu-item.active,
.context-menu .menu-item:hover,
.dropdown-menu li:hover,
.menu-item-container:hover,
.nav-group-item.active {
    background-color: var(--active-file-bg-color) !important;
    color: var(--active-file-text-color) !important;
    border-left: 3px solid var(--primary-color)
}

.context-menu,
.dropdown-menu {
    background-color: #191a21 !important;
    border: 1px solid rgba(255, 255, 255, .05) !important;
    box-shadow: 0 8px 24px rgba(0, 0, 0, .5) !important;
    padding: 5px 0 !important
}

.context-menu li,
.dropdown-menu li {
    border: none !important;
    background: 0 0 !important;
    padding: 0 !important;
    margin: 0 !important
}

.dropdown-menu li>a {
    display: block;
    padding: 6px 20px;
    color: var(--text-color-secondary) !important;
    border-left: 3px solid transparent;
    transition: all .1s
}

.dropdown-menu li>a:hover {
    background-color: var(--active-file-bg-color) !important;
    color: #fff !important;
    border-left-color: var(--primary-color);
    text-decoration: none
}

.context-menu .menu-item {
    padding: 6px 20px;
    color: var(--text-color-secondary) !important;
    border-left: 3px solid transparent;
    background: 0 0 !important
}

.context-menu .menu-item.active,
.context-menu .menu-item:hover {
    background-color: var(--active-file-bg-color) !important;
    color: #fff !important;
    border-left-color: var(--primary-color)
}

.context-menu .menu-item>* {
    border: none !important;
    background: 0 0 !important
}

.context-menu .menu-item>i,
.dropdown-menu li>a>i {
    width: 1.2em;
    text-align: center;
    margin-right: 8px;
    opacity: .7
}

.context-menu .menu-item:hover>i,
.dropdown-menu li>a:hover>i {
    opacity: 1;
    color: #fff
}

.export-detail,
.export-items-list-control {
    background-color: var(--bg-color) !important;
    color: var(--text-color) !important;
    border-color: rgba(255, 255, 255, .05) !important
}

.export-item.active {
    background-color: var(--active-file-bg-color) !important;
    color: var(--active-file-text-color) !important;
    border-left: 3px solid var(--primary-color) !important;
    padding-left: 7px !important
}

.export-item:hover:not(.active) {
    background-color: rgba(255, 255, 255, .03) !important
}

.typora-sourceview-on #toggle-sourceview-btn {
    background-color: color-mix(in srgb, var(--primary-color), transparent 85%) !important;
    color: var(--primary-color) !important;
    border-left: 3px solid var(--primary-color);
    padding-left: 10px;
    margin-left: -2px;
    transition: all .2s ease
}

.typora-sourceview-on #toggle-sourceview-btn:hover {
    background-color: color-mix(in srgb, var(--primary-color), transparent 75%) !important;
    color: #fff !important;
    box-shadow: 0 0 10px color-mix(in srgb, var(--primary-color), transparent 80%)
}

#footer-word-count:hover,
#spell-check-panel:hover {
    background-color: rgba(255, 255, 255, .05) !important;
    color: #fff !important
}

.typora-sourceview-on .CodeMirror-gutters {
    background-color: var(--bg-color) !important;
    border-right: 1px solid rgba(255, 255, 255, .05) !important
}

#outline-content .outline-h2::after,
#outline-content .outline-h2>.outline-item::before {
    content: none !important;
    display: none !important;
    border: none !important;
    background: 0 0 !important
}

#outline-content .outline-label {
    border: none !important;
    background: 0 0 !important;
    padding-left: 0 !important;
    margin: 0 !important;
    flex: 1;
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis
}

#outline-content .outline-item {
    display: flex !important;
    align-items: center !important;
    width: fit-content;
    max-width: 100%;
    padding: 6px 12px;
    margin-bottom: 2px;
    color: var(--text-color-secondary);
    cursor: pointer;
    text-decoration: none;
    border-radius: 50px;
    border: 1px solid transparent;
    outline: 0;
    transition: all .2s ease;
    position: relative;
    line-height: 1.6
}

#outline-content .outline-expander {
    flex-shrink: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-right: 4px;
    color: inherit;
    opacity: .6
}

#outline-content .outline-h1 {
    margin-top: 10px;
    margin-bottom: 4px
}

#outline-content .outline-h2,
#outline-content .outline-h3,
#outline-content .outline-h4,
#outline-content .outline-h5,
#outline-content .outline-h6 {
    border-left: 1.5px solid rgba(255, 255, 255, .05);
    margin-left: 22px;
    padding-left: 8px
}

#outline-content .outline-h1>.outline-item {
    font-size: larger;
    font-weight: 700;
    color: #fff
}

#outline-content .outline-item:hover {
    background-color: color-mix(in srgb, var(--primary-color), transparent 90%);
    color: #fff;
    margin-left: 0 !important;
    margin-right: 0 !important;
    border-left-color: transparent !important;
    padding-left: 18px
}

div.outline-item-active {
    background-color: color-mix(in srgb, var(--primary-color), transparent 85%) !important;
    border: 1px solid color-mix(in srgb, var(--primary-color), transparent 70%) !important;
    color: var(--primary-color) !important;
    font-weight: 700;
    box-shadow: 0 0 10px color-mix(in srgb, var(--primary-color), transparent 90%);
    transform: none;
    padding-right: 30px !important;
    padding-left: 12px !important;
    margin-left: 0 !important;
    margin-right: 0 !important
}

@keyframes outline-twinkle {
    from {
        opacity: .5;
        transform: translateY(-50%) scale(.8)
    }

    to {
        opacity: 1;
        transform: translateY(-50%) scale(1.2)
    }
}

#outline-content .outline-item-active::after {
    content: "✦";
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 10px;
    color: var(--primary-color);
    display: block !important;
    z-index: 10;
    animation: outline-twinkle 1.5s infinite alternate
}

.typora-export-sidebar {
    position: fixed;
    top: 20px;
    bottom: 20px;
    left: 20px;
    width: 320px;
    margin-top: 0;
    display: flex;
    flex-direction: column;
    background-color: rgba(30, 30, 40, .85);
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);
    border: 1px solid color-mix(in srgb, var(--primary-color), transparent 80%);
    border-radius: 20px;
    overflow: hidden;
    z-index: 100;
    color: var(--text-color-secondary);
    font-family: inherit;
    transition: border-color .3s ease, box-shadow .3s ease
}

.typora-export-sidebar:hover {
    border-color: var(--primary-color);
    box-shadow: 0 0 20px color-mix(in srgb, var(--primary-color), transparent 80%), 0 10px 40px rgba(0, 0, 0, .5)
}

.typora-export-sidebar::before {
    content: "目录";
    display: block;
    position: absolute;
    top: 25px;
    left: 24px;
    font-size: 20px;
    font-weight: 700;
    color: var(--primary-color);
    z-index: 10;
    letter-spacing: 2px;
    text-shadow: 0 0 10px color-mix(in srgb, var(--primary-color), transparent 70%);
    pointer-events: none
}

.typora-export-sidebar .outline-content {
    flex: 1;
    height: auto !important;
    overflow-y: auto;
    padding-top: 70px !important;
    padding-left: 15px !important;
    padding-bottom: 30px;
    box-sizing: border-box
}

.typora-export-sidebar .outline-h1 {
    margin-top: 5px;
    margin-bottom: 4px;
    margin-left: 0 !important
}

.typora-export-sidebar .outline-h2,
.typora-export-sidebar .outline-h3,
.typora-export-sidebar .outline-h4,
.typora-export-sidebar .outline-h5,
.typora-export-sidebar .outline-h6 {
    border-left: 1.5px solid rgba(255, 255, 255, .05) !important;
    margin-left: 15px !important;
    padding-left: 8px !important;
    list-style: none !important
}

.typora-export-sidebar .outline-item {
    display: flex !important;
    align-items: center !important;
    width: fit-content !important;
    max-width: 95% !important;
    padding: 6px 12px !important;
    margin: 2px 0 !important;
    color: inherit !important;
    cursor: pointer;
    text-decoration: none !important;
    border-radius: 50px !important;
    border: none !important;
    transition: all .2s ease;
    line-height: 1.6;
    overflow: visible !important
}

.typora-export-sidebar .outline-h1>.outline-item {
    font-size: 1.1em !important;
    font-weight: 700 !important;
    color: #fff !important
}

.typora-export-sidebar .outline-label {
    padding: 0 !important;
    margin: 0 !important;
    border: none !important;
    text-decoration: none !important;
    color: inherit !important;
    flex: 0 1 auto !important;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis
}

.typora-export-sidebar .outline-expander {
    width: 16px !important;
    text-align: center;
    margin-right: 4px;
    flex-shrink: 0;
    color: inherit;
    opacity: .6
}

.typora-export .outline-expander::before {
    content: "▸" !important;
    font-family: Arial, sans-serif !important;
    font-size: 14px !important;
    display: inline-block
}

.typora-export .outline-expander:hover::before,
.typora-export .outline-item-open>.outline-item>.outline-expander::before {
    content: "▾" !important;
    color: var(--primary-color) !important
}

.typora-export .outline-item-single .outline-expander::before {
    display: none !important
}

.typora-export-sidebar .outline-item:hover {
    background-color: color-mix(in srgb, var(--primary-color), transparent 90%) !important;
    color: #fff !important;
    padding-left: 18px !important;
    margin-left: 0 !important;
    border: none !important
}

.typora-export-sidebar .outline-item-wrapper.outline-item-active>.outline-item {
    background-color: color-mix(in srgb, var(--primary-color), transparent 40%) !important;
    color: #fff !important;
    font-weight: 600 !important;
    box-shadow: 0 4px 10px color-mix(in srgb, var(--primary-color), transparent 70%);
    padding-right: 30px !important;
    padding-left: 12px !important;
    margin-left: 0 !important;
    border: none !important
}

.typora-export-sidebar .outline-item-wrapper.outline-item-active>.outline-item .outline-label {
    color: #fff !important
}

.typora-export-sidebar .outline-item-wrapper.outline-item-active>.outline-item .outline-expander::before {
    color: rgba(255, 255, 255, .8) !important
}

.typora-export-sidebar .outline-item-wrapper.outline-item-active>.outline-item::after {
    content: "✦";
    position: static !important;
    transform: none !important;
    margin-left: 8px !important;
    flex-shrink: 0;
    display: inline-block !important;
    line-height: 1;
    font-size: 10px;
    font-family: Arial, sans-serif;
    color: rgba(255, 255, 255, .9);
    z-index: 10;
    animation: outline-twinkle 1.5s infinite alternate
}

.typora-export body {
    background-color: var(--bg-color);
    color: var(--text-color)
}

.typora-export #write {
    box-shadow: none;
    margin-left: 340px;
    width: auto;
    max-width: 1000px
}

::-webkit-scrollbar {
    width: 8px;
    height: 8px
}

::-webkit-scrollbar-track {
    background: 0 0
}

::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background: color-mix(in srgb, var(--primary-color), transparent 70%)
}

::-webkit-scrollbar-thumb:hover {
    background: var(--primary-color)
}

::-webkit-scrollbar-corner {
    background: 0 0
}

@media screen and (max-width:800px) {
    .typora-export-sidebar {
        display: none
    }

    .typora-export #write {
        margin-left: 20px;
        margin-right: 20px
    }
}

@media screen and (max-width:800px) {
    .typora-export-sidebar {
        display: none
    }

    .typora-export #write {
        margin-left: 20px;
        margin-right: 20px
    }
}

@media print {
    @page {
        margin: 0;
        padding: 15mm;
        size: A4
    }

    body {
        background-color: transparent !important;
        margin: 0 !important;
        width: 100% !important
    }

    .typora-export #write {
        margin: 0 auto !important;
        padding: 0 !important;
        width: 100% !important;
        max-width: 100% !important;
        border: none !important;
        box-shadow: none !important;
        background: 0 0 !important
    }

    * {
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important
    }

    #write::before {
        display: block !important;
        opacity: .1 !important;
        top: 0 !important;
        left: 0 !important;
        width: 100% !important;
        height: 100% !important;
        -webkit-mask-image: var(--bg-style) !important;
        mask-image: var(--bg-style) !important;
        background-color: var(--primary-color) !important;
        pointer-events: none;
        z-index: -1
    }

    p {
        line-height: 1.5rem;
        text-shadow: none
    }

    figure,
    pre {
        page-break-inside: avoid
    }

    ol,
    ul {
        page-break-inside: auto !important;
        break-inside: auto !important
    }

    li {
        page-break-inside: avoid;
        break-inside: avoid
    }

    pre {
        page-break-inside: auto !important;
        break-inside: auto !important;
        white-space: pre-wrap
    }

    blockquote {
        page-break-inside: auto !important;
        break-inside: auto !important
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        page-break-after: avoid !important;
        break-after: avoid !important;
        page-break-inside: avoid !important
    }

    p {
        orphans: 2;
        widows: 2
    }

    .md-toc {
        background-image: none;
        text-shadow: none
    }

    #write strong {
        text-shadow: none
    }
}

::selection {
    background: var(--select-text-bg-color);
    color: inherit
}

#write,
[contenteditable],
input,
textarea {
    caret-color: var(--primary-color)
}

@media print {
    .page-break {
        page-break-after: always;
        break-after: always;
        height: 0;
        display: block;
        visibility: hidden
    }
}

.megamenu-content {
    background: var(--bg-color) !important;
    color: var(--text-color) !important
}

.megamenu-opened header {
    background-image: none !important;
    background-color: transparent !important;
    border-bottom: none !important
}

#megamenu-menu-sidebar,
.megamenu-menu {
    background-color: #191a21 !important;
    color: var(--text-color) !important;
    box-shadow: 2px 0 10px rgba(0, 0, 0, .3) !important;
    border-right: 1px solid rgba(255, 255, 255, .05) !important
}

.megamenu-menu-header {
    background-color: transparent !important;
    border-bottom: 1px solid rgba(255, 255, 255, .05) !important;
    color: var(--text-color) !important
}

#megamenu-back-btn,
#megamenu-menu-header-title {
    color: var(--text-color) !important
}

#megamenu-menu-list {
    background-color: transparent !important;
    padding: 10px 0 !important;
    margin: 0 !important;
    box-shadow: none !important;
    border: none !important
}

#megamenu-menu-list li:hover {
    background-color: transparent !important;
    border: none !important;
    padding-left: 0 !important
}

#megamenu-menu-list li a {
    color: var(--text-color-secondary) !important;
    background-color: transparent !important;
    border: 1px solid transparent;
    border-radius: 6px;
    margin: 2px 15px !important;
    width: auto !important;
    height: auto !important;
    line-height: 2.5em !important;
    padding-left: 15px !important;
    transition: all .2s ease;
    display: block
}

#megamenu-menu-list li a.active,
#megamenu-menu-list li a:hover {
    background-color: var(--active-file-bg-color) !important;
    color: #fff !important;
    border-left: 3px solid var(--primary-color) !important;
    padding-left: 12px !important;
    box-shadow: inset 0 0 10px color-mix(in srgb, var(--primary-color), transparent 85%)
}

#megamenu-menu-list li a i {
    color: var(--secondary-color) !important;
    width: 20px;
    text-align: center;
    margin-right: 8px
}

#megamenu-menu-list li a.active i,
#megamenu-menu-list li a:hover i {
    color: #fff !important
}

.megamenu-menu-panel {
    background-color: transparent !important
}

.megamenu-menu-panel h1,
.megamenu-menu-panel h2 {
    color: var(--primary-color) !important;
    font-weight: 700 !important;
    border-color: transparent !important
}

.long-btn {
    background-color: rgba(255, 255, 255, .02) !important;
    color: var(--text-color) !important;
    border: 1px solid rgba(255, 255, 255, .05) !important;
    border-radius: 8px !important;
    transition: all .2s ease
}

.long-btn:hover {
    background-color: color-mix(in srgb, var(--primary-color), transparent 90%) !important;
    color: #fff !important;
    border-color: var(--primary-color) !important;
    box-shadow: 0 0 10px color-mix(in srgb, var(--primary-color), transparent 80%)
}

.long-btn i {
    color: var(--secondary-color) !important
}

.long-btn:hover i {
    color: #fff !important
}

#recent-file-panel {
    padding: 10px 0;
    color: var(--text-color) !important
}

#recent-file-panel tbody tr:nth-child(2n-1) {
    background-color: transparent !important
}

.recent-file-item {
    color: var(--text-color-secondary) !important;
    border-bottom: 1px solid rgba(255, 255, 255, .02) !important;
    transition: all .2s ease
}

.megamenu-menu-panel table tr {
    border: none !important
}

.megamenu-menu-panel tbody tr:hover,
.recent-file-item:hover {
    background-color: color-mix(in srgb, var(--primary-color), transparent 90%) !important;
    color: #fff !important
}

.recent-file-item:hover .recent-file-name {
    color: var(--primary-color) !important
}

#recent-document-table thead tr th {
    color: var(--secondary-color) !important;
    border-bottom: 1px solid rgba(255, 255, 255, .1) !important;
    font-weight: 700
}

#recent-file-panel-search-input {
    background-color: rgba(0, 0, 0, .3) !important;
    border: 1px solid rgba(255, 255, 255, .1) !important;
    color: var(--text-color) !important;
    box-shadow: none !important
}

#recent-file-panel-search-input:focus {
    border-color: var(--primary-color) !important;
    box-shadow: 0 0 8px color-mix(in srgb, var(--primary-color), transparent 80%) !important
}

#recent-file-panel-action-btn {
    background-color: rgba(255, 255, 255, .05) !important;
    border: 1px solid rgba(255, 255, 255, .1) !important;
    color: var(--text-color) !important
}

.theme-preview-div {
    border: 2px solid rgba(255, 255, 255, .1) !important;
    border-radius: 8px;
    transition: all .3s
}

.theme-preview-div.active,
.theme-preview-div:hover {
    border-color: var(--primary-color) !important;
    box-shadow: 0 0 15px color-mix(in srgb, var(--primary-color), transparent 60%);
    transform: scale(1.05)
}

.megamenu-content::-webkit-scrollbar,
.megamenu-menu::-webkit-scrollbar {
    width: 6px
}

.megamenu-content::-webkit-scrollbar-thumb,
.megamenu-menu::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, .2);
    border-radius: 3px
}

#theme-preview-grid {
    display: grid !important;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)) !important;
    gap: 20px !important;
    max-width: 100% !important;
    padding-right: 10px
}

.theme-preview-div {
    width: 100% !important;
    margin: 0 !important;
    height: 160px !important;
    border: 2px solid rgba(255, 255, 255, .1) !important;
    border-radius: 8px;
    transition: all .3s cubic-bezier(.25, .8, .25, 1);
    box-sizing: border-box;
    position: relative;
    overflow: hidden
}

.theme-preview-content {
    width: 100% !important;
    height: 100% !important;
    border: none !important;
    pointer-events: none
}

.theme-preview-div.active,
.theme-preview-div:hover {
    border-color: var(--primary-color) !important;
    box-shadow: 0 5px 20px color-mix(in srgb, var(--primary-color), transparent 70%);
    transform: translateY(-5px);
    z-index: 10
}

.theme-preview-div .fa-check-circle {
    position: absolute;
    bottom: 8px;
    right: 8px;
    font-size: 24px;
    color: var(--primary-color) !important;
    background: 0 0;
    border-radius: 0;
    box-shadow: none;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, .8), 0 0 10px var(--primary-color);
    opacity: 1 !important;
    z-index: 20
}

.megamenu-content::-webkit-scrollbar,
.megamenu-menu::-webkit-scrollbar {
    width: 6px
}

.megamenu-content::-webkit-scrollbar-thumb,
.megamenu-menu::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, .2);
    border-radius: 3px
}`,b={abyss:`@import url(./phycat/phycat.dark.css);

:root {
  /* 标题后小图标，借鉴自思源笔记主题——Savor */
  --h1-icon-shape: url("data:image/svg+xml;utf8,<svg fill='rgba(255, 176, 176, 0.5)' height='24' viewBox='0 0 32 32' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M4.8 29.714v0c-1.371 0-2.514-1.143-2.514-2.514v0c0-1.371 1.143-2.514 2.514-2.514v0c1.371 0 2.514 1.143 2.514 2.514v0c0.114 1.371-1.029 2.514-2.514 2.514z'/></svg>") no-repeat center;
  --h2-icon-shape: url("data:image/svg+xml;utf8,<svg fill='rgba(255, 176, 176, 0.5)' height='24' viewBox='0 0 32 32' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M11.429 25.143c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM4.571 18.286c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286z'/></svg>") no-repeat center;
  --h3-icon-shape: url("data:image/svg+xml;utf8,<svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'><path d='M4.571 25.143c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM4.571 18.286c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM11.429 25.143c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286z'/></svg>");
  --h4-icon-shape: url("data:image/svg+xml;utf8,<svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'><path d='M4.571 25.143c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM4.571 18.286c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM11.429 25.143c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM11.429 22.857c1.257 0 2.286-1.029 2.286-2.286s-1.029-2.286-2.286-2.286-2.286 1.029-2.286 2.286 1.029 2.286 2.286 2.286z'/></svg>");
  --h5-icon-shape: url("data:image/svg+xml;utf8,<svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'><path d='M4.571 18.286c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM11.429 22.857c1.257 0 2.286-1.029 2.286-2.286s-1.029-2.286-2.286-2.286-2.286 1.029-2.286 2.286 1.029 2.286 2.286 2.286zM4.571 25.143c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM11.429 25.143c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM4.571 11.429c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286z'/></svg>");
  --h6-icon-shape: url("data:image/svg+xml;utf8,<svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'><path d='M4.571 25.143c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM4.571 18.286c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM4.571 11.429c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM11.429 18.286c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM11.429 25.143c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM11.429 16c1.257 0 2.286-1.029 2.286-2.286s-1.029-2.286-2.286-2.286-2.286 1.029-2.286 2.286 1.029 2.286 2.286 2.286z'/></svg>");

  /* 文档背景样式 */
  /* 1. 交叉斜线 */
  --bg-shape-cross: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h30v30H0z' fill='none'/%3E%3Cpath d='M0 0L15 15M30 0L15 15M0 30L15 15M30 30L15 15' stroke='black' stroke-width='0.4'/%3E%3C/svg%3E");
  /* 2. 星点图案 */
  --bg-shape-star: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M10 10l2-6l2 6l6 2l-6 2l-2 6l-2-6l-6-2Z' fill='black'/%3E%3Cpath d='M30 15l1-3l1 3l3 1l-3 1l-1 3l-1-3l-3-1Z' fill='black'/%3E%3Cpath d='M25 30l1.5-4.5l1.5 4.5l4.5 1.5l-4.5 1.5l-1.5 4.5l-1.5-4.5l-4.5-1.5Z' fill='black'/%3E%3C/svg%3E");
  /* 3. 六边形图案 */
  --bg-shape-hex: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M10 5l10 0l5 8.66l-5 8.66l-10 0l-5-8.66Z' fill='none' stroke='black' stroke-width='0.4'/%3E%3Cpath d='M20 22.32l10 0l5 8.66l-5 8.66l-10 0l-5-8.66Z' fill='none' stroke='black' stroke-width='0.4'/%3E%3C/svg%3E");
  /* 4. 十字圆点 */
  --bg-shape-dot: url("data:image/svg+xml,%3Csvg width='15' height='15' viewBox='0 0 15 15' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='7.5' cy='7.5' r='0.5' fill='black'/%3E%3Ccircle cx='7.5' cy='2.5' r='0.5' fill='black'/%3E%3Ccircle cx='7.5' cy='12.5' r='0.5' fill='black'/%3E%3Ccircle cx='2.5' cy='7.5' r='0.5' fill='black'/%3E%3Ccircle cx='12.5' cy='7.5' r='0.5' fill='black'/%3E%3C/svg%3E");
  /* 5. 三角形 */
  --bg-shape-tri: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h30v30H0z' fill='none'/%3E%3Cpath d='M0 0L30 0L15 15Z' fill='black'/%3E%3Cpath d='M30 30L0 30L15 15Z' fill='black'/%3E%3C/svg%3E");
  /* 6. 方格网 */
  --bg-shape-grid: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v20H0z' fill='none'/%3E%3Cpath d='M20 0v20M0 20h20' stroke='black' stroke-width='0.7'/%3E%3C/svg%3E");
  /* 7. 无背景 (纯白背景) */
  --bg-shape-none: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=");

  /* 文档背景样式  none 无背景*/
  --bg-style: radial-gradient(#ffffff 1px, transparent 1px);
  /* --- 页面纹理 --- */
  --texture-mask-color: #bd93f9;
  --texture-opacity: 0.05;

  /* 自动编号格式设置 无需自动编号可全部注释掉或部分注释掉*/
  --autonum-h1: counter(h1) ". ";
  --autonum-h2: counter(h1) "." counter(h2) ". ";
  --autonum-h3: counter(h1) "." counter(h2) "." counter(h3) ". ";
  /* --autonum-h4: counter(h1) "." counter(h2) "." counter(h3) "." counter(h4) ". ";
  --autonum-h5: counter(h1) "." counter(h2) "." counter(h3) "." counter(h4) "." counter(h5) ". ";
  --autonum-h6: counter(h1) "." counter(h2) "." counter(h3) "." counter(h4) "." counter(h5) "." counter(h6) ". "; */

  /* 下面是文章内Toc目录自动编号，与上面一样即可 */
  --autonum-h1toc: counter(h1toc) ". ";
  --autonum-h2toc: counter(h1toc) "." counter(h2toc) ". ";
  --autonum-h3toc: counter(h1toc) "." counter(h2toc) "." counter(h3toc) ". ";
  /* --autonum-h4toc: counter(h1toc) "." counter(h2toc) "." counter(h3toc) "." counter(h4toc) ". ";
  --autonum-h5toc: counter(h1toc) "." counter(h2toc) "." counter(h3toc) "." counter(h4toc) "." counter(h5toc) ". ";
  --autonum-h6toc: counter(h1toc) "." counter(h2toc) "." counter(h3toc) "." counter(h4toc) "." counter(h5toc) "." counter(h6toc) ". "; */



/* --- 基础背景与文字 --- */
  --bg-color: #0f111a;            /* 午夜深蓝 (Midnight Abyss) */
  --text-color: #d6deeb;          /* 冰蓝白 (Ice White) */
  --text-color-secondary: #7e8c9f; /* 蓝灰文字 (Steel Blue) */

  /* --- 核心品牌色 --- */
  --primary-color: #00f3ff;       /* 电光青 (Electric Cyan) - 核心高亮 */
  --secondary-color: #2979ff;     /* 深海蓝 (Ocean Blue) - 辅助 */
  --accent-color: #d500f9;        /* 全息紫 (Holo Purple) - 强调点缀 */
  --border-color: #1f2233;        /* 暗蓝边框 */

  /* --- 光晕特效变量 --- */
  --glow-color: rgba(0, 243, 255, 0.5);
  --glow-shadow-text: 0 0 8px var(--glow-color);
  --glow-shadow-box: 0 0 8px var(--glow-color);
  --hover-background-color: #00f3ff; /* 电光青 */
  --select-text-bg-color: rgba(0, 243, 255, 0.3);

  /* --- H1 标题 --- */
  --h1-color: var(--text-color);
  --h1-underline-color: var(--primary-color);

  /* --- H2 标题 (Fusion Glass) --- */
  /* 背景：青色到透明径向渐变 */
  --h2-bg-image: radial-gradient(ellipse at center bottom, rgba(0, 243, 255, 0.15), transparent 70%);

  /* 其他变量 */
  --code-block-bg: rgba(15, 17, 26, 0.6); /* 深蓝背景 */
  --glass-border-color: rgba(0, 243, 255, 0.1);

  /* --- 代码高亮 (Material Ocean / Night Owl 风格) --- */
  --code-keyword: #c792ea;        /* 关键字 -> 紫色 */
  --code-variable: #d6deeb;       /* 变量 -> 冰白 */
  --code-function: #82aaff;       /* 函数 -> 软蓝 */
  --code-param: #7fdbca;          /* 参数 -> 青绿 */
  --code-string: #ecc48d;         /* 字符串 -> 淡金 */
  --code-comment: #637777;        /* 注释 -> 灰青 */
  --code-type: #addb67;           /* 类型 -> 嫩绿 */
  --code-property: #80cbc4;       /* 属性 -> 蓝绿 */
  --code-number: #f78c6c;         /* 数字 -> 橙 */
  --code-meta: #7fdbca;           /* 元数据 -> 青 */
  --code-selected-bg: #1d3b53;    /* 选中背景 -> 深蓝块 */

  /* --- UI 控件/原生菜单覆盖 --- */
  --active-file-bg-color: color-mix(in srgb, var(--primary-color), transparent 85%);
  --active-file-text-color: #ffffff;
  --item-hover-bg-color: rgba(0, 243, 255, 0.08);
  --menu-divider-color: rgba(0, 243, 255, 0.1);
  --window-border: 1px solid var(--primary-color) !important;

  --rawblock-edit-panel-bd: var(--item-hover-bg-color);
}`,caramel:`@import url(./phycat/phycat.light.css);

:root {
  /* 标题后小图标，借鉴自思源笔记主题——Savor */
  --h1-icon-shape: url("data:image/svg+xml;utf8,<svg fill='rgba(255, 176, 176, 0.5)' height='24' viewBox='0 0 32 32' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M4.8 29.714v0c-1.371 0-2.514-1.143-2.514-2.514v0c0-1.371 1.143-2.514 2.514-2.514v0c1.371 0 2.514 1.143 2.514 2.514v0c0.114 1.371-1.029 2.514-2.514 2.514z'/></svg>") no-repeat center;
  --h2-icon-shape: url("data:image/svg+xml;utf8,<svg fill='rgba(255, 176, 176, 0.5)' height='24' viewBox='0 0 32 32' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M11.429 25.143c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM4.571 18.286c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286z'/></svg>") no-repeat center;
  --h3-icon-shape: url("data:image/svg+xml;utf8,<svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'><path d='M4.571 25.143c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM4.571 18.286c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM11.429 25.143c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286z'/></svg>");
  --h4-icon-shape: url("data:image/svg+xml;utf8,<svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'><path d='M4.571 25.143c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM4.571 18.286c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM11.429 25.143c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM11.429 22.857c1.257 0 2.286-1.029 2.286-2.286s-1.029-2.286-2.286-2.286-2.286 1.029-2.286 2.286 1.029 2.286 2.286 2.286z'/></svg>");
  --h5-icon-shape: url("data:image/svg+xml;utf8,<svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'><path d='M4.571 18.286c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM11.429 22.857c1.257 0 2.286-1.029 2.286-2.286s-1.029-2.286-2.286-2.286-2.286 1.029-2.286 2.286 1.029 2.286 2.286 2.286zM4.571 25.143c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM11.429 25.143c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM4.571 11.429c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286z'/></svg>");
  --h6-icon-shape: url("data:image/svg+xml;utf8,<svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'><path d='M4.571 25.143c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM4.571 18.286c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM4.571 11.429c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM11.429 18.286c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM11.429 25.143c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM11.429 16c1.257 0 2.286-1.029 2.286-2.286s-1.029-2.286-2.286-2.286-2.286 1.029-2.286 2.286 1.029 2.286 2.286 2.286z'/></svg>");
 
  /* 文档背景样式 */
  /* 1. 交叉斜线 */
  --bg-shape-cross: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h30v30H0z' fill='none'/%3E%3Cpath d='M0 0L15 15M30 0L15 15M0 30L15 15M30 30L15 15' stroke='black' stroke-width='0.4'/%3E%3C/svg%3E");
  /* 2. 星点图案 */
  --bg-shape-star: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M10 10l2-6l2 6l6 2l-6 2l-2 6l-2-6l-6-2Z' fill='black'/%3E%3Cpath d='M30 15l1-3l1 3l3 1l-3 1l-1 3l-1-3l-3-1Z' fill='black'/%3E%3Cpath d='M25 30l1.5-4.5l1.5 4.5l4.5 1.5l-4.5 1.5l-1.5 4.5l-1.5-4.5l-4.5-1.5Z' fill='black'/%3E%3C/svg%3E");
  /* 3. 六边形图案 */
  --bg-shape-hex: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M10 5l10 0l5 8.66l-5 8.66l-10 0l-5-8.66Z' fill='none' stroke='black' stroke-width='0.4'/%3E%3Cpath d='M20 22.32l10 0l5 8.66l-5 8.66l-10 0l-5-8.66Z' fill='none' stroke='black' stroke-width='0.4'/%3E%3C/svg%3E");
  /* 4. 十字圆点 */
  --bg-shape-dot: url("data:image/svg+xml,%3Csvg width='15' height='15' viewBox='0 0 15 15' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='7.5' cy='7.5' r='0.5' fill='black'/%3E%3Ccircle cx='7.5' cy='2.5' r='0.5' fill='black'/%3E%3Ccircle cx='7.5' cy='12.5' r='0.5' fill='black'/%3E%3Ccircle cx='2.5' cy='7.5' r='0.5' fill='black'/%3E%3Ccircle cx='12.5' cy='7.5' r='0.5' fill='black'/%3E%3C/svg%3E");
  /* 5. 三角形 */
  --bg-shape-tri: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h30v30H0z' fill='none'/%3E%3Cpath d='M0 0L30 0L15 15Z' fill='black'/%3E%3Cpath d='M30 30L0 30L15 15Z' fill='black'/%3E%3C/svg%3E");
  /* 6. 方格网 */
  --bg-shape-grid: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v20H0z' fill='none'/%3E%3Cpath d='M20 0v20M0 20h20' stroke='black' stroke-width='0.7'/%3E%3C/svg%3E");
  /* 7. 无背景 (纯白背景) */
  --bg-shape-none: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=");

  /* 文档背景样式  none 无背景*/
  --bg-style: var(--bg-shape-cross);

  /* 自动编号格式设置 无需自动编号可全部注释掉或部分注释掉*/
  --autonum-h1: counter(h1) ". ";
  --autonum-h2: counter(h1) "." counter(h2) ". ";
  --autonum-h3: counter(h1) "." counter(h2) "." counter(h3) ". ";
   /* --autonum-h4: counter(h1) "." counter(h2) "." counter(h3) "." counter(h4) ". ";
  --autonum-h5: counter(h1) "." counter(h2) "." counter(h3) "." counter(h4) "." counter(h5) ". ";
  --autonum-h6: counter(h1) "." counter(h2) "." counter(h3) "." counter(h4) "." counter(h5) "." counter(h6) ". "; */

  /* 下面是文章内Toc目录自动编号，与上面一样即可 */
 --autonum-h1toc: counter(h1toc) ". ";
  --autonum-h2toc: counter(h1toc) "." counter(h2toc) ". ";
  --autonum-h3toc: counter(h1toc) "." counter(h2toc) "." counter(h3toc) ". ";
   /* --autonum-h4toc: counter(h1toc) "." counter(h2toc) "." counter(h3toc) "." counter(h4toc) ". ";
  --autonum-h5toc: counter(h1toc) "." counter(h2toc) "." counter(h3toc) "." counter(h4toc) "." counter(h5toc) ". ";
  --autonum-h6toc: counter(h1toc) "." counter(h2toc) "." counter(h3toc) "." counter(h4toc) "." counter(h5toc) "." counter(h6toc) ". "; */


 /* ================= 3. 主题配色 (流光蜜金 - Liquid Gold) ================= */
  
  /* 标题主色：明亮的金琥珀色，像液态黄金 */
  --head-title-color: #f59e0b;
  
  /* H2 渐变：从奶油金 -> 琥珀金 -> 奶油金，增加光泽感 */
  --head-title-h2-color: #fff;
  --head-title-h2-background: linear-gradient(to right, #fcd34d, #f59e0b, #fcd34d);
  
  /* 元素颜色 */
  --element-color: #f59e0b;             /* 核心色 (Amber 500) */
  --element-color-deep: #b45309;        /* 深色 (古铜色) - 保证文字清晰，不发暗 */
  --element-color-shallow: #fbbf24;     /* 浅色 (向日葵黄) - 用于图标/装饰 */
  --element-color-so-shallow: #fef3c7;  /* 很浅色 (淡奶黄) - 高亮背景 */
  --element-color-soo-shallow: #fffbeb; /* 极浅色 (象牙白/奶油色) - 温暖的底色 */
  
  /* 毛玻璃底色 */
  --glass-bg-color: #f59e0b15;

  /* 行内代码：深焦糖色 */
  --element-color-linecode: #92400e;
  --element-color-linecode-background: #fff7ed;

  /* UI 颜色 */
  --appui-color: #f59e0b;
  --appui-color-icon: #f59e0b;
  --appui-color-text: #78350f; /* 深棕色文字，比黑色更柔和 */
  --primary-color: #f59e0b;

  --rawblock-edit-panel-bd: var(--element-color-soo-shallow);
}
`,cherry:`@import url(./phycat/phycat.light.css);

:root {
  /* 标题后小图标，借鉴自思源笔记主题——Savor */
  --h1-icon-shape: url("data:image/svg+xml;utf8,<svg fill='rgba(255, 176, 176, 0.5)' height='24' viewBox='0 0 32 32' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M4.8 29.714v0c-1.371 0-2.514-1.143-2.514-2.514v0c0-1.371 1.143-2.514 2.514-2.514v0c1.371 0 2.514 1.143 2.514 2.514v0c0.114 1.371-1.029 2.514-2.514 2.514z'/></svg>") no-repeat center;
  --h2-icon-shape: url("data:image/svg+xml;utf8,<svg fill='rgba(255, 176, 176, 0.5)' height='24' viewBox='0 0 32 32' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M11.429 25.143c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM4.571 18.286c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286z'/></svg>") no-repeat center;
  --h3-icon-shape: url("data:image/svg+xml;utf8,<svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'><path d='M4.571 25.143c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM4.571 18.286c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM11.429 25.143c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286z'/></svg>");
  --h4-icon-shape: url("data:image/svg+xml;utf8,<svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'><path d='M4.571 25.143c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM4.571 18.286c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM11.429 25.143c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM11.429 22.857c1.257 0 2.286-1.029 2.286-2.286s-1.029-2.286-2.286-2.286-2.286 1.029-2.286 2.286 1.029 2.286 2.286 2.286z'/></svg>");
  --h5-icon-shape: url("data:image/svg+xml;utf8,<svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'><path d='M4.571 18.286c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM11.429 22.857c1.257 0 2.286-1.029 2.286-2.286s-1.029-2.286-2.286-2.286-2.286 1.029-2.286 2.286 1.029 2.286 2.286 2.286zM4.571 25.143c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM11.429 25.143c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM4.571 11.429c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286z'/></svg>");
  --h6-icon-shape: url("data:image/svg+xml;utf8,<svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'><path d='M4.571 25.143c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM4.571 18.286c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM4.571 11.429c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM11.429 18.286c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM11.429 25.143c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM11.429 16c1.257 0 2.286-1.029 2.286-2.286s-1.029-2.286-2.286-2.286-2.286 1.029-2.286 2.286 1.029 2.286 2.286 2.286z'/></svg>");

  /* 文档背景样式 */
  /* 1. 交叉斜线 */
  --bg-shape-cross: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h30v30H0z' fill='none'/%3E%3Cpath d='M0 0L15 15M30 0L15 15M0 30L15 15M30 30L15 15' stroke='black' stroke-width='0.4'/%3E%3C/svg%3E");
  /* 2. 星点图案 */
  --bg-shape-star: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M10 10l2-6l2 6l6 2l-6 2l-2 6l-2-6l-6-2Z' fill='black'/%3E%3Cpath d='M30 15l1-3l1 3l3 1l-3 1l-1 3l-1-3l-3-1Z' fill='black'/%3E%3Cpath d='M25 30l1.5-4.5l1.5 4.5l4.5 1.5l-4.5 1.5l-1.5 4.5l-1.5-4.5l-4.5-1.5Z' fill='black'/%3E%3C/svg%3E");
  /* 3. 六边形图案 */
  --bg-shape-hex: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M10 5l10 0l5 8.66l-5 8.66l-10 0l-5-8.66Z' fill='none' stroke='black' stroke-width='0.4'/%3E%3Cpath d='M20 22.32l10 0l5 8.66l-5 8.66l-10 0l-5-8.66Z' fill='none' stroke='black' stroke-width='0.4'/%3E%3C/svg%3E");
  /* 4. 十字圆点 */
  --bg-shape-dot: url("data:image/svg+xml,%3Csvg width='15' height='15' viewBox='0 0 15 15' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='7.5' cy='7.5' r='0.5' fill='black'/%3E%3Ccircle cx='7.5' cy='2.5' r='0.5' fill='black'/%3E%3Ccircle cx='7.5' cy='12.5' r='0.5' fill='black'/%3E%3Ccircle cx='2.5' cy='7.5' r='0.5' fill='black'/%3E%3Ccircle cx='12.5' cy='7.5' r='0.5' fill='black'/%3E%3C/svg%3E");
  /* 5. 三角形 */
  --bg-shape-tri: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h30v30H0z' fill='none'/%3E%3Cpath d='M0 0L30 0L15 15Z' fill='black'/%3E%3Cpath d='M30 30L0 30L15 15Z' fill='black'/%3E%3C/svg%3E");
  /* 6. 方格网 */
  --bg-shape-grid: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v20H0z' fill='none'/%3E%3Cpath d='M20 0v20M0 20h20' stroke='black' stroke-width='0.7'/%3E%3C/svg%3E");
  /* 7. 无背景 (纯白背景) */
  --bg-shape-none: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=");

  /* 文档背景样式  none 无背景*/
  --bg-style: var(--bg-shape-none);

  /* 自动编号格式设置 无需自动编号可全部注释掉或部分注释掉*/
  /* --autonum-h1: counter(h1) ". ";
  --autonum-h2: counter(h1) "." counter(h2) ". ";
  --autonum-h3: counter(h1) "." counter(h2) "." counter(h3) ". ";
  --autonum-h4: counter(h1) "." counter(h2) "." counter(h3) "." counter(h4) ". ";
  --autonum-h5: counter(h1) "." counter(h2) "." counter(h3) "." counter(h4) "." counter(h5) ". ";
  --autonum-h6: counter(h1) "." counter(h2) "." counter(h3) "." counter(h4) "." counter(h5) "." counter(h6) ". "; */

  /* 下面是文章内Toc目录自动编号，与上面一样即可 */
  /* --autonum-h1toc: counter(h1toc) ". ";
  --autonum-h2toc: counter(h1toc) "." counter(h2toc) ". ";
  --autonum-h3toc: counter(h1toc) "." counter(h2toc) "." counter(h3toc) ". ";
  --autonum-h4toc: counter(h1toc) "." counter(h2toc) "." counter(h3toc) "." counter(h4toc) ". ";
  --autonum-h5toc: counter(h1toc) "." counter(h2toc) "." counter(h3toc) "." counter(h4toc) "." counter(h5toc) ". ";
  --autonum-h6toc: counter(h1toc) "." counter(h2toc) "." counter(h3toc) "." counter(h4toc) "." counter(h5toc) "." counter(h6toc) ". "; */

  /* 主题颜色 */

  --head-title-color: #aa1141;
  /* 标题主色 */
  --head-title-h2-color: #fff;
  --head-title-h2-background: linear-gradient(to right, #b41919, #ea68b6, #b41919);
  /* 二级标题主色，因为二级标题是背景色的，所以单独设置 */

  --element-color: #aa1111;
  /* 元素主色 */
  --element-color-deep: #9a0036;
  /* 元素深色 */
  --element-color-shallow: #ffa6a6;
  /* 元素浅色 */
  --element-color-so-shallow: #ff40404f;
  /* 元素很浅色 */
  --element-color-soo-shallow: #fec2c225;
  /* 元素非常浅色 */

  /* 毛玻璃底色 透明度一定要很低 */
  --glass-bg-color: #fce4e414;


  --element-color-linecode: #9a0000;
  /* 行内代码文字色 */
  --element-color-linecode-background: #b16c6c25;
  /* 行内代码背景色 */

  /* 程序本体UI */
  --appui-color: #810000;
  /* 程序UI主题色 */
  --appui-color-icon: #870e0e;
  /* 程序UI图标颜色 */
  --appui-color-text: #333;
  /* 程序UI文字色 */
  --primary-color: #810000;
  --s: rgba(255, 176, 176, 0.5);

  --rawblock-edit-panel-bd:var(--element-color-soo-shallow);
}
`,forest:`@import url(./phycat/phycat.light.css);

:root {
  /* 标题后小图标，借鉴自思源笔记主题——Savor */
  --h1-icon-shape: url("data:image/svg+xml;utf8,<svg fill='rgba(255, 176, 176, 0.5)' height='24' viewBox='0 0 32 32' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M4.8 29.714v0c-1.371 0-2.514-1.143-2.514-2.514v0c0-1.371 1.143-2.514 2.514-2.514v0c1.371 0 2.514 1.143 2.514 2.514v0c0.114 1.371-1.029 2.514-2.514 2.514z'/></svg>") no-repeat center;
  --h2-icon-shape: url("data:image/svg+xml;utf8,<svg fill='rgba(255, 176, 176, 0.5)' height='24' viewBox='0 0 32 32' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M11.429 25.143c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM4.571 18.286c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286z'/></svg>") no-repeat center;
  --h3-icon-shape: url("data:image/svg+xml;utf8,<svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'><path d='M4.571 25.143c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM4.571 18.286c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM11.429 25.143c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286z'/></svg>");
  --h4-icon-shape: url("data:image/svg+xml;utf8,<svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'><path d='M4.571 25.143c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM4.571 18.286c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM11.429 25.143c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM11.429 22.857c1.257 0 2.286-1.029 2.286-2.286s-1.029-2.286-2.286-2.286-2.286 1.029-2.286 2.286 1.029 2.286 2.286 2.286z'/></svg>");
  --h5-icon-shape: url("data:image/svg+xml;utf8,<svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'><path d='M4.571 18.286c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM11.429 22.857c1.257 0 2.286-1.029 2.286-2.286s-1.029-2.286-2.286-2.286-2.286 1.029-2.286 2.286 1.029 2.286 2.286 2.286zM4.571 25.143c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM11.429 25.143c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM4.571 11.429c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286z'/></svg>");
  --h6-icon-shape: url("data:image/svg+xml;utf8,<svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'><path d='M4.571 25.143c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM4.571 18.286c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM4.571 11.429c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM11.429 18.286c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM11.429 25.143c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM11.429 16c1.257 0 2.286-1.029 2.286-2.286s-1.029-2.286-2.286-2.286-2.286 1.029-2.286 2.286 1.029 2.286 2.286 2.286z'/></svg>");
 
  /* 文档背景样式 */
  /* 1. 交叉斜线 */
  --bg-shape-cross: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h30v30H0z' fill='none'/%3E%3Cpath d='M0 0L15 15M30 0L15 15M0 30L15 15M30 30L15 15' stroke='black' stroke-width='0.4'/%3E%3C/svg%3E");
  /* 2. 星点图案 */
  --bg-shape-star: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M10 10l2-6l2 6l6 2l-6 2l-2 6l-2-6l-6-2Z' fill='black'/%3E%3Cpath d='M30 15l1-3l1 3l3 1l-3 1l-1 3l-1-3l-3-1Z' fill='black'/%3E%3Cpath d='M25 30l1.5-4.5l1.5 4.5l4.5 1.5l-4.5 1.5l-1.5 4.5l-1.5-4.5l-4.5-1.5Z' fill='black'/%3E%3C/svg%3E");
  /* 3. 六边形图案 */
  --bg-shape-hex: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M10 5l10 0l5 8.66l-5 8.66l-10 0l-5-8.66Z' fill='none' stroke='black' stroke-width='0.4'/%3E%3Cpath d='M20 22.32l10 0l5 8.66l-5 8.66l-10 0l-5-8.66Z' fill='none' stroke='black' stroke-width='0.4'/%3E%3C/svg%3E");
  /* 4. 十字圆点 */
  --bg-shape-dot: url("data:image/svg+xml,%3Csvg width='15' height='15' viewBox='0 0 15 15' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='7.5' cy='7.5' r='0.5' fill='black'/%3E%3Ccircle cx='7.5' cy='2.5' r='0.5' fill='black'/%3E%3Ccircle cx='7.5' cy='12.5' r='0.5' fill='black'/%3E%3Ccircle cx='2.5' cy='7.5' r='0.5' fill='black'/%3E%3Ccircle cx='12.5' cy='7.5' r='0.5' fill='black'/%3E%3C/svg%3E");
  /* 5. 三角形 */
  --bg-shape-tri: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h30v30H0z' fill='none'/%3E%3Cpath d='M0 0L30 0L15 15Z' fill='black'/%3E%3Cpath d='M30 30L0 30L15 15Z' fill='black'/%3E%3C/svg%3E");
  /* 6. 方格网 */
  --bg-shape-grid: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v20H0z' fill='none'/%3E%3Cpath d='M20 0v20M0 20h20' stroke='black' stroke-width='0.7'/%3E%3C/svg%3E");
  /* 7. 无背景 (纯白背景) */
  --bg-shape-none: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=");

  /* 文档背景样式  none 无背景*/
  --bg-style: var(--bg-shape-cross);


  /* 自动编号格式设置 无需自动编号可全部注释掉或部分注释掉*/
  /* --autonum-h1: counter(h1) ". ";
  --autonum-h2: counter(h1) "." counter(h2) ". ";
  --autonum-h3: counter(h1) "." counter(h2) "." counter(h3) ". ";
  --autonum-h4: counter(h1) "." counter(h2) "." counter(h3) "." counter(h4) ". ";
  --autonum-h5: counter(h1) "." counter(h2) "." counter(h3) "." counter(h4) "." counter(h5) ". ";
  --autonum-h6: counter(h1) "." counter(h2) "." counter(h3) "." counter(h4) "." counter(h5) "." counter(h6) ". "; */

  /* 下面是文章内Toc目录自动编号，与上面一样即可 */
  /* --autonum-h1toc: counter(h1toc) ". ";
  --autonum-h2toc: counter(h1toc) "." counter(h2toc) ". ";
  --autonum-h3toc: counter(h1toc) "." counter(h2toc) "." counter(h3toc) ". ";
  --autonum-h4toc: counter(h1toc) "." counter(h2toc) "." counter(h3toc) "." counter(h4toc) ". ";
  --autonum-h5toc: counter(h1toc) "." counter(h2toc) "." counter(h3toc) "." counter(h4toc) "." counter(h5toc) ". ";
  --autonum-h6toc: counter(h1toc) "." counter(h2toc) "." counter(h3toc) "." counter(h4toc) "." counter(h5toc) "." counter(h6toc) ". "; */


  /* 主题颜色 */

  --head-title-color: #11aa63;
  /* 标题主色 */
  --head-title-h2-color: #FFF;
  --head-title-h2-background: linear-gradient(to right, #43bd84, #68eaad, #43bd84);
  /* 二级标题主色，因为二级标题是背景色的，所以单独设置 */

  --element-color: #11aa63;
  /* 元素主色 */
  --element-color-deep: #009a52;
  /* 元素深色 */
  --element-color-shallow: #80c3a4;
  /* 元素浅色 */
  --element-color-so-shallow: #43bd8499;
  /* 元素很浅色 */
  --element-color-soo-shallow: #6cb19125;
  /* 元素非常浅色 */

  /* 毛玻璃底色 透明度一定要很低 */
  --glass-bg-color:#6cb19112;

  --element-color-linecode: #009a52;
  /* 行内代码文字色 */
  --element-color-linecode-background: #6cb19125;
  /* 行内代码背景色 */

  /* 程序主题色 */
  --appui-color: #008145;
  --appui-color-icon: #0e874f;
  --appui-color-text: #333;
  --primary-color: #008145;

  --rawblock-edit-panel-bd:var(--element-color-soo-shallow);
}
`,mauve:`@import url(./phycat/phycat.light.css);

:root {
  /* 标题后小图标，借鉴自思源笔记主题——Savor */
  --h1-icon-shape: url("data:image/svg+xml;utf8,<svg fill='rgba(255, 176, 176, 0.5)' height='24' viewBox='0 0 32 32' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M4.8 29.714v0c-1.371 0-2.514-1.143-2.514-2.514v0c0-1.371 1.143-2.514 2.514-2.514v0c1.371 0 2.514 1.143 2.514 2.514v0c0.114 1.371-1.029 2.514-2.514 2.514z'/></svg>") no-repeat center;
  --h2-icon-shape: url("data:image/svg+xml;utf8,<svg fill='rgba(255, 176, 176, 0.5)' height='24' viewBox='0 0 32 32' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M11.429 25.143c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM4.571 18.286c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286z'/></svg>") no-repeat center;
  --h3-icon-shape: url("data:image/svg+xml;utf8,<svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'><path d='M4.571 25.143c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM4.571 18.286c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM11.429 25.143c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286z'/></svg>");
  --h4-icon-shape: url("data:image/svg+xml;utf8,<svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'><path d='M4.571 25.143c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM4.571 18.286c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM11.429 25.143c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM11.429 22.857c1.257 0 2.286-1.029 2.286-2.286s-1.029-2.286-2.286-2.286-2.286 1.029-2.286 2.286 1.029 2.286 2.286 2.286z'/></svg>");
  --h5-icon-shape: url("data:image/svg+xml;utf8,<svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'><path d='M4.571 18.286c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM11.429 22.857c1.257 0 2.286-1.029 2.286-2.286s-1.029-2.286-2.286-2.286-2.286 1.029-2.286 2.286 1.029 2.286 2.286 2.286zM4.571 25.143c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM11.429 25.143c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM4.571 11.429c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286z'/></svg>");
  --h6-icon-shape: url("data:image/svg+xml;utf8,<svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'><path d='M4.571 25.143c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM4.571 18.286c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM4.571 11.429c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM11.429 18.286c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM11.429 25.143c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM11.429 16c1.257 0 2.286-1.029 2.286-2.286s-1.029-2.286-2.286-2.286-2.286 1.029-2.286 2.286 1.029 2.286 2.286 2.286z'/></svg>");

  /* 文档背景样式 */
  /* 1. 交叉斜线 */
  --bg-shape-cross: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h30v30H0z' fill='none'/%3E%3Cpath d='M0 0L15 15M30 0L15 15M0 30L15 15M30 30L15 15' stroke='black' stroke-width='0.4'/%3E%3C/svg%3E");
  /* 2. 星点图案 */
  --bg-shape-star: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M10 10l2-6l2 6l6 2l-6 2l-2 6l-2-6l-6-2Z' fill='black'/%3E%3Cpath d='M30 15l1-3l1 3l3 1l-3 1l-1 3l-1-3l-3-1Z' fill='black'/%3E%3Cpath d='M25 30l1.5-4.5l1.5 4.5l4.5 1.5l-4.5 1.5l-1.5 4.5l-1.5-4.5l-4.5-1.5Z' fill='black'/%3E%3C/svg%3E");
  /* 3. 六边形图案 */
  --bg-shape-hex: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M10 5l10 0l5 8.66l-5 8.66l-10 0l-5-8.66Z' fill='none' stroke='black' stroke-width='0.4'/%3E%3Cpath d='M20 22.32l10 0l5 8.66l-5 8.66l-10 0l-5-8.66Z' fill='none' stroke='black' stroke-width='0.4'/%3E%3C/svg%3E");
  /* 4. 十字圆点 */
  --bg-shape-dot: url("data:image/svg+xml,%3Csvg width='15' height='15' viewBox='0 0 15 15' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='7.5' cy='7.5' r='0.5' fill='black'/%3E%3Ccircle cx='7.5' cy='2.5' r='0.5' fill='black'/%3E%3Ccircle cx='7.5' cy='12.5' r='0.5' fill='black'/%3E%3Ccircle cx='2.5' cy='7.5' r='0.5' fill='black'/%3E%3Ccircle cx='12.5' cy='7.5' r='0.5' fill='black'/%3E%3C/svg%3E");
  /* 5. 三角形 */
  --bg-shape-tri: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h30v30H0z' fill='none'/%3E%3Cpath d='M0 0L30 0L15 15Z' fill='black'/%3E%3Cpath d='M30 30L0 30L15 15Z' fill='black'/%3E%3C/svg%3E");
  /* 6. 方格网 */
  --bg-shape-grid: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v20H0z' fill='none'/%3E%3Cpath d='M20 0v20M0 20h20' stroke='black' stroke-width='0.7'/%3E%3C/svg%3E");
  /* 7. 无背景 (纯白背景) */
  --bg-shape-none: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=");

  /* 文档背景样式  none 无背景*/
  --bg-style: var(--bg-shape-cross);


  /* 自动编号格式设置 无需自动编号可全部注释掉或部分注释掉*/
  /* --autonum-h1: counter(h1) ". ";
  --autonum-h2: counter(h1) "." counter(h2) ". ";
  --autonum-h3: counter(h1) "." counter(h2) "." counter(h3) ". ";
  --autonum-h4: counter(h1) "." counter(h2) "." counter(h3) "." counter(h4) ". ";
  --autonum-h5: counter(h1) "." counter(h2) "." counter(h3) "." counter(h4) "." counter(h5) ". ";
  --autonum-h6: counter(h1) "." counter(h2) "." counter(h3) "." counter(h4) "." counter(h5) "." counter(h6) ". "; */

  /* 下面是文章内Toc目录自动编号，与上面一样即可 */
  /* --autonum-h1toc: counter(h1toc) ". ";
  --autonum-h2toc: counter(h1toc) "." counter(h2toc) ". ";
  --autonum-h3toc: counter(h1toc) "." counter(h2toc) "." counter(h3toc) ". ";
  --autonum-h4toc: counter(h1toc) "." counter(h2toc) "." counter(h3toc) "." counter(h4toc) ". ";
  --autonum-h5toc: counter(h1toc) "." counter(h2toc) "." counter(h3toc) "." counter(h4toc) "." counter(h5toc) ". ";
  --autonum-h6toc: counter(h1toc) "." counter(h2toc) "." counter(h3toc) "." counter(h4toc) "." counter(h5toc) "." counter(h6toc) ". "; */

  /* 主题颜色 */

  /* 标题主色：明快柔和的兰花紫 */
  --head-title-color: #ba68c8;
  
  /* H2 渐变：从浅藤紫过渡到锦葵紫，像丝绸一样柔和 */
  --head-title-h2-color: #fff;
  --head-title-h2-background: linear-gradient(to right, #D8B4E2, #A06EB4, #D8B4E2);
  
  /* 元素颜色 */
  /* 元素颜色 */
  --element-color: #A06EB4;             /* 核心色 (Mauve) */
  --element-color-deep: #6A3F7A;        /* 深色 (Deep Plum) - 保证文字高对比度 */
  --element-color-shallow: #D4B6E0;     /* 浅色 (Thistle) - 用于图标/装饰 */
  --element-color-so-shallow: #F3E5F5;  /* 很浅色 (高亮/引用背景) */
  --element-color-soo-shallow: #FAFAFC; /* 极浅色 (带一点冷调的背景白) */
  --glass-bg-color: #f0d7f91a;          /* 毛玻璃底色 (约 8% 透明度) */

  /* 行内代码：深紫罗兰，清晰且有格调 */
  --element-color-linecode: #5E35B1;
  --element-color-linecode-background: #F2EFF9;

  /* UI 颜色 */
  --appui-color: #A06EB4;
  --appui-color-icon: #A06EB4;
  --appui-color-text: #4A235A; /* 深紫色 UI 文字 */
  --primary-color: #A06EB4;

  --rawblock-edit-panel-bd: var(--element-color-soo-shallow);
}
`,mint:`@import url(./phycat/phycat.light.css);

:root {
  /* 标题后小图标，借鉴自思源笔记主题——Savor */
  --h1-icon-shape: url("data:image/svg+xml;utf8,<svg fill='rgba(255, 176, 176, 0.5)' height='24' viewBox='0 0 32 32' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M4.8 29.714v0c-1.371 0-2.514-1.143-2.514-2.514v0c0-1.371 1.143-2.514 2.514-2.514v0c1.371 0 2.514 1.143 2.514 2.514v0c0.114 1.371-1.029 2.514-2.514 2.514z'/></svg>") no-repeat center;
  --h2-icon-shape: url("data:image/svg+xml;utf8,<svg fill='rgba(255, 176, 176, 0.5)' height='24' viewBox='0 0 32 32' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M11.429 25.143c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM4.571 18.286c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286z'/></svg>") no-repeat center;
  --h3-icon-shape: url("data:image/svg+xml;utf8,<svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'><path d='M4.571 25.143c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM4.571 18.286c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM11.429 25.143c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286z'/></svg>");
  --h4-icon-shape: url("data:image/svg+xml;utf8,<svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'><path d='M4.571 25.143c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM4.571 18.286c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM11.429 25.143c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM11.429 22.857c1.257 0 2.286-1.029 2.286-2.286s-1.029-2.286-2.286-2.286-2.286 1.029-2.286 2.286 1.029 2.286 2.286 2.286z'/></svg>");
  --h5-icon-shape: url("data:image/svg+xml;utf8,<svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'><path d='M4.571 18.286c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM11.429 22.857c1.257 0 2.286-1.029 2.286-2.286s-1.029-2.286-2.286-2.286-2.286 1.029-2.286 2.286 1.029 2.286 2.286 2.286zM4.571 25.143c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM11.429 25.143c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM4.571 11.429c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286z'/></svg>");
  --h6-icon-shape: url("data:image/svg+xml;utf8,<svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'><path d='M4.571 25.143c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM4.571 18.286c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM4.571 11.429c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM11.429 18.286c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM11.429 25.143c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM11.429 16c1.257 0 2.286-1.029 2.286-2.286s-1.029-2.286-2.286-2.286-2.286 1.029-2.286 2.286 1.029 2.286 2.286 2.286z'/></svg>");

  /* 文档背景样式 */
  /* 1. 交叉斜线 */
  --bg-shape-cross: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h30v30H0z' fill='none'/%3E%3Cpath d='M0 0L15 15M30 0L15 15M0 30L15 15M30 30L15 15' stroke='black' stroke-width='0.4'/%3E%3C/svg%3E");
  /* 2. 星点图案 */
  --bg-shape-star: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M10 10l2-6l2 6l6 2l-6 2l-2 6l-2-6l-6-2Z' fill='black'/%3E%3Cpath d='M30 15l1-3l1 3l3 1l-3 1l-1 3l-1-3l-3-1Z' fill='black'/%3E%3Cpath d='M25 30l1.5-4.5l1.5 4.5l4.5 1.5l-4.5 1.5l-1.5 4.5l-1.5-4.5l-4.5-1.5Z' fill='black'/%3E%3C/svg%3E");
  /* 3. 六边形图案 */
  --bg-shape-hex: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M10 5l10 0l5 8.66l-5 8.66l-10 0l-5-8.66Z' fill='none' stroke='black' stroke-width='0.4'/%3E%3Cpath d='M20 22.32l10 0l5 8.66l-5 8.66l-10 0l-5-8.66Z' fill='none' stroke='black' stroke-width='0.4'/%3E%3C/svg%3E");
  /* 4. 十字圆点 */
  --bg-shape-dot: url("data:image/svg+xml,%3Csvg width='15' height='15' viewBox='0 0 15 15' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='7.5' cy='7.5' r='0.5' fill='black'/%3E%3Ccircle cx='7.5' cy='2.5' r='0.5' fill='black'/%3E%3Ccircle cx='7.5' cy='12.5' r='0.5' fill='black'/%3E%3Ccircle cx='2.5' cy='7.5' r='0.5' fill='black'/%3E%3Ccircle cx='12.5' cy='7.5' r='0.5' fill='black'/%3E%3C/svg%3E");
  /* 5. 三角形 */
  --bg-shape-tri: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h30v30H0z' fill='none'/%3E%3Cpath d='M0 0L30 0L15 15Z' fill='black'/%3E%3Cpath d='M30 30L0 30L15 15Z' fill='black'/%3E%3C/svg%3E");
  /* 6. 方格网 */
  --bg-shape-grid: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v20H0z' fill='none'/%3E%3Cpath d='M20 0v20M0 20h20' stroke='black' stroke-width='0.7'/%3E%3C/svg%3E");
  /* 7. 无背景 (纯白背景) */
  --bg-shape-none: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=");

  /* 文档背景样式  none 无背景*/
  --bg-style: var(--bg-shape-cross);

  /* 自动编号格式设置 无需自动编号可全部注释掉或部分注释掉*/
  /* --autonum-h1: counter(h1) ". ";
  --autonum-h2: counter(h1) "." counter(h2) ". ";
  --autonum-h3: counter(h1) "." counter(h2) "." counter(h3) ". ";
  --autonum-h4: counter(h1) "." counter(h2) "." counter(h3) "." counter(h4) ". ";
  --autonum-h5: counter(h1) "." counter(h2) "." counter(h3) "." counter(h4) "." counter(h5) ". ";
  --autonum-h6: counter(h1) "." counter(h2) "." counter(h3) "." counter(h4) "." counter(h5) "." counter(h6) ". "; */

  /* 下面是文章内Toc目录自动编号，与上面一样即可 */
  /* --autonum-h1toc: counter(h1toc) ". ";
  --autonum-h2toc: counter(h1toc) "." counter(h2toc) ". ";
  --autonum-h3toc: counter(h1toc) "." counter(h2toc) "." counter(h3toc) ". ";
  --autonum-h4toc: counter(h1toc) "." counter(h2toc) "." counter(h3toc) "." counter(h4toc) ". ";
  --autonum-h5toc: counter(h1toc) "." counter(h2toc) "." counter(h3toc) "." counter(h4toc) "." counter(h5toc) ". ";
  --autonum-h6toc: counter(h1toc) "." counter(h2toc) "." counter(h3toc) "." counter(h4toc) "." counter(h5toc) "." counter(h6toc) ". "; */


  /* 主题颜色 */

  --head-title-color: #3db8bf;
  /* 标题主色 */
  --head-title-h2-color: #fff;
  --head-title-h2-background: linear-gradient(to right,
      #80F7C4,#3DB8D3, #80F7C4);
  /* 二级标题主色，因为二级标题是背景色的，所以单独设置 */

  --element-color: #3db8bf;
  /* 元素主色 */
  --element-color-deep: #089ba3;
  /* 元素深色 */
  --element-color-shallow: #7aeaf0;
  /* 元素浅色 */
  --element-color-so-shallow: #7aeaf077;
  /* 元素很浅色 */
  --element-color-soo-shallow: #7aeaf018;
  /* 元素非常浅色 */

  /* 毛玻璃底色 透明度一定要很低 */
  --glass-bg-color:#8ff9ff14;
  

  --element-color-linecode: #089ba3;
  /* 行内代码文字色 */
  --element-color-linecode-background: #7aeaf018;
  /* 行内代码背景色 */

  /* 程序本体UI */
  --appui-color: #3db8bf;
  /* 程序UI主题色 */
  --appui-color-icon: #3db8bf;
  /* 程序UI图标颜色 */
  --appui-color-text: #333;
  /* 程序UI文字色 */
  --primary-color: #3db8bf;

  --rawblock-edit-panel-bd: var(--element-color-soo-shallow);
}
`,prussian:`@import url(./phycat/phycat.light.css);

:root {
  /* 标题后小图标，借鉴自思源笔记主题——Savor */
  --h1-icon-shape: url("data:image/svg+xml;utf8,<svg fill='rgba(255, 176, 176, 0.5)' height='24' viewBox='0 0 32 32' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M4.8 29.714v0c-1.371 0-2.514-1.143-2.514-2.514v0c0-1.371 1.143-2.514 2.514-2.514v0c1.371 0 2.514 1.143 2.514 2.514v0c0.114 1.371-1.029 2.514-2.514 2.514z'/></svg>") no-repeat center;
  --h2-icon-shape: url("data:image/svg+xml;utf8,<svg fill='rgba(255, 176, 176, 0.5)' height='24' viewBox='0 0 32 32' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M11.429 25.143c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM4.571 18.286c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286z'/></svg>") no-repeat center;
  --h3-icon-shape: url("data:image/svg+xml;utf8,<svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'><path d='M4.571 25.143c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM4.571 18.286c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM11.429 25.143c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286z'/></svg>");
  --h4-icon-shape: url("data:image/svg+xml;utf8,<svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'><path d='M4.571 25.143c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM4.571 18.286c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM11.429 25.143c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM11.429 22.857c1.257 0 2.286-1.029 2.286-2.286s-1.029-2.286-2.286-2.286-2.286 1.029-2.286 2.286 1.029 2.286 2.286 2.286z'/></svg>");
  --h5-icon-shape: url("data:image/svg+xml;utf8,<svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'><path d='M4.571 18.286c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM11.429 22.857c1.257 0 2.286-1.029 2.286-2.286s-1.029-2.286-2.286-2.286-2.286 1.029-2.286 2.286 1.029 2.286 2.286 2.286zM4.571 25.143c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM11.429 25.143c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM4.571 11.429c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286z'/></svg>");
  --h6-icon-shape: url("data:image/svg+xml;utf8,<svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'><path d='M4.571 25.143c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM4.571 18.286c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM4.571 11.429c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM11.429 18.286c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM11.429 25.143c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM11.429 16c1.257 0 2.286-1.029 2.286-2.286s-1.029-2.286-2.286-2.286-2.286 1.029-2.286 2.286 1.029 2.286 2.286 2.286z'/></svg>");

  /* 文档背景样式 */
  /* 1. 交叉斜线 */
  --bg-shape-cross: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h30v30H0z' fill='none'/%3E%3Cpath d='M0 0L15 15M30 0L15 15M0 30L15 15M30 30L15 15' stroke='black' stroke-width='0.4'/%3E%3C/svg%3E");
  /* 2. 星点图案 */
  --bg-shape-star: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M10 10l2-6l2 6l6 2l-6 2l-2 6l-2-6l-6-2Z' fill='black'/%3E%3Cpath d='M30 15l1-3l1 3l3 1l-3 1l-1 3l-1-3l-3-1Z' fill='black'/%3E%3Cpath d='M25 30l1.5-4.5l1.5 4.5l4.5 1.5l-4.5 1.5l-1.5 4.5l-1.5-4.5l-4.5-1.5Z' fill='black'/%3E%3C/svg%3E");
  /* 3. 六边形图案 */
  --bg-shape-hex: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M10 5l10 0l5 8.66l-5 8.66l-10 0l-5-8.66Z' fill='none' stroke='black' stroke-width='0.4'/%3E%3Cpath d='M20 22.32l10 0l5 8.66l-5 8.66l-10 0l-5-8.66Z' fill='none' stroke='black' stroke-width='0.4'/%3E%3C/svg%3E");
  /* 4. 十字圆点 */
  --bg-shape-dot: url("data:image/svg+xml,%3Csvg width='15' height='15' viewBox='0 0 15 15' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='7.5' cy='7.5' r='0.5' fill='black'/%3E%3Ccircle cx='7.5' cy='2.5' r='0.5' fill='black'/%3E%3Ccircle cx='7.5' cy='12.5' r='0.5' fill='black'/%3E%3Ccircle cx='2.5' cy='7.5' r='0.5' fill='black'/%3E%3Ccircle cx='12.5' cy='7.5' r='0.5' fill='black'/%3E%3C/svg%3E");
  /* 5. 三角形 */
  --bg-shape-tri: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h30v30H0z' fill='none'/%3E%3Cpath d='M0 0L30 0L15 15Z' fill='black'/%3E%3Cpath d='M30 30L0 30L15 15Z' fill='black'/%3E%3C/svg%3E");
  /* 6. 方格网 */
  --bg-shape-grid: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v20H0z' fill='none'/%3E%3Cpath d='M20 0v20M0 20h20' stroke='black' stroke-width='0.7'/%3E%3C/svg%3E");
  /* 7. 无背景 (纯白背景) */
  --bg-shape-none: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=");

  /* 文档背景样式  none 无背景*/
  --bg-style: var(--bg-shape-cross);

  /* 自动编号格式设置 无需自动编号可全部注释掉或部分注释掉*/
  /* --autonum-h1: counter(h1) ". ";
  --autonum-h2: counter(h1) "." counter(h2) ". ";
  --autonum-h3: counter(h1) "." counter(h2) "." counter(h3) ". ";
  --autonum-h4: counter(h1) "." counter(h2) "." counter(h3) "." counter(h4) ". ";
  --autonum-h5: counter(h1) "." counter(h2) "." counter(h3) "." counter(h4) "." counter(h5) ". ";
  --autonum-h6: counter(h1) "." counter(h2) "." counter(h3) "." counter(h4) "." counter(h5) "." counter(h6) ". "; */

  /* 下面是文章内Toc目录自动编号，与上面一样即可 */
  /* --autonum-h1toc: counter(h1toc) ". ";
  --autonum-h2toc: counter(h1toc) "." counter(h2toc) ". ";
  --autonum-h3toc: counter(h1toc) "." counter(h2toc) "." counter(h3toc) ". ";
  --autonum-h4toc: counter(h1toc) "." counter(h2toc) "." counter(h3toc) "." counter(h4toc) ". ";
  --autonum-h5toc: counter(h1toc) "." counter(h2toc) "." counter(h3toc) "." counter(h4toc) "." counter(h5toc) ". ";
  --autonum-h6toc: counter(h1toc) "." counter(h2toc) "." counter(h3toc) "." counter(h4toc) "." counter(h5toc) "." counter(h6toc) ". "; */


  /* 标题主色：深邃的普鲁士蓝，沉稳大气 */
  --head-title-color: #1D4E89;
  
  /* H2 渐变：从柔和的钢蓝过渡到深普鲁士蓝，像深海的光影 */
  --head-title-h2-color: #fff;
  --head-title-h2-background: linear-gradient(to right, #6BA3CC, #1D4E89, #6BA3CC);
  
  /* 元素颜色 */
  --element-color: #1D4E89;             /* 主色 (Steel Blue) */
  --element-color-deep: #003153;        /* 深色 (Classic Prussian) - 用于强调/文字 */
  --element-color-shallow: #6BA3CC;     /* 浅色 (Air Force Blue) - 用于图标/装饰 */
  --element-color-so-shallow: #E1EDF5;  /* 很浅色 (高亮背景) */
  --element-color-soo-shallow: #F0F6FA; /* 极浅色 (冷调背景白) */
  --glass-bg-color: #b7d8ff15;          /* 毛玻璃底色 (约 8% 透明度) */

  /* 行内代码：深海午夜蓝 */
  --element-color-linecode: #0F3057;
  --element-color-linecode-background: #EBF5FA;

  /* UI 颜色 */
  --appui-color: #1D4E89;
  --appui-color-icon: #1D4E89;
  --appui-color-text: #003153; 
  --primary-color: #1D4E89;

  --rawblock-edit-panel-bd: var(--element-color-soo-shallow);
}
`,radiation:`@import url(./phycat/phycat.dark.css);

:root {
  /* 标题后小图标，借鉴自思源笔记主题——Savor */
  --h1-icon-shape: url("data:image/svg+xml;utf8,<svg fill='rgba(255, 176, 176, 0.5)' height='24' viewBox='0 0 32 32' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M4.8 29.714v0c-1.371 0-2.514-1.143-2.514-2.514v0c0-1.371 1.143-2.514 2.514-2.514v0c1.371 0 2.514 1.143 2.514 2.514v0c0.114 1.371-1.029 2.514-2.514 2.514z'/></svg>") no-repeat center;
  --h2-icon-shape: url("data:image/svg+xml;utf8,<svg fill='rgba(255, 176, 176, 0.5)' height='24' viewBox='0 0 32 32' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M11.429 25.143c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM4.571 18.286c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286z'/></svg>") no-repeat center;
  --h3-icon-shape: url("data:image/svg+xml;utf8,<svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'><path d='M4.571 25.143c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM4.571 18.286c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM11.429 25.143c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286z'/></svg>");
  --h4-icon-shape: url("data:image/svg+xml;utf8,<svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'><path d='M4.571 25.143c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM4.571 18.286c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM11.429 25.143c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM11.429 22.857c1.257 0 2.286-1.029 2.286-2.286s-1.029-2.286-2.286-2.286-2.286 1.029-2.286 2.286 1.029 2.286 2.286 2.286z'/></svg>");
  --h5-icon-shape: url("data:image/svg+xml;utf8,<svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'><path d='M4.571 18.286c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM11.429 22.857c1.257 0 2.286-1.029 2.286-2.286s-1.029-2.286-2.286-2.286-2.286 1.029-2.286 2.286 1.029 2.286 2.286 2.286zM4.571 25.143c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM11.429 25.143c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM4.571 11.429c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286z'/></svg>");
  --h6-icon-shape: url("data:image/svg+xml;utf8,<svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'><path d='M4.571 25.143c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM4.571 18.286c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM4.571 11.429c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM11.429 18.286c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM11.429 25.143c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM11.429 16c1.257 0 2.286-1.029 2.286-2.286s-1.029-2.286-2.286-2.286-2.286 1.029-2.286 2.286 1.029 2.286 2.286 2.286z'/></svg>");

  /* 文档背景样式 */
  /* 1. 交叉斜线 */
  --bg-shape-cross: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h30v30H0z' fill='none'/%3E%3Cpath d='M0 0L15 15M30 0L15 15M0 30L15 15M30 30L15 15' stroke='black' stroke-width='0.4'/%3E%3C/svg%3E");
  /* 2. 星点图案 */
  --bg-shape-star: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M10 10l2-6l2 6l6 2l-6 2l-2 6l-2-6l-6-2Z' fill='black'/%3E%3Cpath d='M30 15l1-3l1 3l3 1l-3 1l-1 3l-1-3l-3-1Z' fill='black'/%3E%3Cpath d='M25 30l1.5-4.5l1.5 4.5l4.5 1.5l-4.5 1.5l-1.5 4.5l-1.5-4.5l-4.5-1.5Z' fill='black'/%3E%3C/svg%3E");
  /* 3. 六边形图案 */
  --bg-shape-hex: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M10 5l10 0l5 8.66l-5 8.66l-10 0l-5-8.66Z' fill='none' stroke='black' stroke-width='0.4'/%3E%3Cpath d='M20 22.32l10 0l5 8.66l-5 8.66l-10 0l-5-8.66Z' fill='none' stroke='black' stroke-width='0.4'/%3E%3C/svg%3E");
  /* 4. 十字圆点 */
  --bg-shape-dot: url("data:image/svg+xml,%3Csvg width='15' height='15' viewBox='0 0 15 15' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='7.5' cy='7.5' r='0.5' fill='black'/%3E%3Ccircle cx='7.5' cy='2.5' r='0.5' fill='black'/%3E%3Ccircle cx='7.5' cy='12.5' r='0.5' fill='black'/%3E%3Ccircle cx='2.5' cy='7.5' r='0.5' fill='black'/%3E%3Ccircle cx='12.5' cy='7.5' r='0.5' fill='black'/%3E%3C/svg%3E");
  /* 5. 三角形 */
  --bg-shape-tri: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h30v30H0z' fill='none'/%3E%3Cpath d='M0 0L30 0L15 15Z' fill='black'/%3E%3Cpath d='M30 30L0 30L15 15Z' fill='black'/%3E%3C/svg%3E");
  /* 6. 方格网 */
  --bg-shape-grid: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v20H0z' fill='none'/%3E%3Cpath d='M20 0v20M0 20h20' stroke='black' stroke-width='0.7'/%3E%3C/svg%3E");
  /* 7. 无背景 (纯白背景) */
  --bg-shape-none: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=");

  /* 文档背景样式  none 无背景*/
  --bg-style: radial-gradient(#ffffff 1px, transparent 1px);
  /* --- 页面纹理 --- */
  --texture-mask-color: #bd93f9;
  --texture-opacity: 0.05;

  /* 自动编号格式设置 无需自动编号可全部注释掉或部分注释掉*/
  --autonum-h1: counter(h1) ". ";
  --autonum-h2: counter(h1) "." counter(h2) ". ";
  --autonum-h3: counter(h1) "." counter(h2) "." counter(h3) ". ";
  /* --autonum-h4: counter(h1) "." counter(h2) "." counter(h3) "." counter(h4) ". ";
  --autonum-h5: counter(h1) "." counter(h2) "." counter(h3) "." counter(h4) "." counter(h5) ". ";
  --autonum-h6: counter(h1) "." counter(h2) "." counter(h3) "." counter(h4) "." counter(h5) "." counter(h6) ". "; */

  /* 下面是文章内Toc目录自动编号，与上面一样即可 */
  --autonum-h1toc: counter(h1toc) ". ";
  --autonum-h2toc: counter(h1toc) "." counter(h2toc) ". ";
  --autonum-h3toc: counter(h1toc) "." counter(h2toc) "." counter(h3toc) ". ";
  /* --autonum-h4toc: counter(h1toc) "." counter(h2toc) "." counter(h3toc) "." counter(h4toc) ". ";
  --autonum-h5toc: counter(h1toc) "." counter(h2toc) "." counter(h3toc) "." counter(h4toc) "." counter(h5toc) ". ";
  --autonum-h6toc: counter(h1toc) "." counter(h2toc) "." counter(h3toc) "." counter(h4toc) "." counter(h5toc) "." counter(h6toc) ". "; */



/* --- 基础背景与文字 --- */
  --bg-color: #1b1d1b;           /* 深岩灰绿 (Dark Slate Greenish) */
  --text-color: #e6e6e6;         /* 中性灰白 (Neutral Pale) */
  --text-color-secondary: #99a699; /* 灰绿文字 (Muted Green) */

  /* --- 核心品牌色 --- */
  --primary-color: #4cd964;      /* 薄荷生化绿 (Mint Neon) - 核心高亮 */
  --secondary-color: #ffc107;    /* 警示琥珀 (Amber Warning) - 辅助/警告 */
  --accent-color: #29b6f6;       /* 能量天蓝 (Sky Blue) - 链接/数据 */
  --border-color: #333933;       /* 深灰绿边框 */

  /* --- 光晕特效变量 --- */
  --glow-color: rgba(76, 217, 100, 0.4);
  --glow-shadow-text: 0 0 8px var(--glow-color);
  --glow-shadow-box: 0 0 8px var(--glow-color);
  --hover-background-color: #4cd964; /* 薄荷生化绿 */
  --select-text-bg-color: rgba(76, 217, 100, 0.3);
  /* 鼠标选中背景 */

  /* --- H1 标题 --- */
  --h1-color: var(--text-color);
  --h1-underline-color: var(--primary-color);

  /* --- H2 标题 (Fusion Glass) --- */
  /* 背景：由绿到透明的径向渐变，降低透明度 */
  --h2-bg-image: radial-gradient(ellipse at center bottom, rgba(76, 217, 100, 0.1), transparent 70%);

  /* 其他变量 */
  --code-block-bg: rgba(20, 25, 20, 0.5); /* 适度深绿背景 */
  --glass-border-color: rgba(76, 217, 100, 0.1);

  /* --- 代码高亮 (Matrix Soft Style) --- */
  --code-keyword: #ffcb6b;       /* 关键字 -> 柔和橙黄 */
  --code-variable: #e6e6e6;      /* 变量 -> 灰白 */
  --code-function: #4cd964;      /* 函数 -> 薄荷绿 */
  --code-param: #89ddff;         /* 参数 -> 浅蓝 */
  --code-string: #c3e88d;        /* 字符串 -> 浅绿黄 */
  --code-comment: #546e7a;       /* 注释 -> 蓝灰 (更清晰) */
  --code-type: #82aaff;          /* 类型 -> 软蓝 */
  --code-property: #4cd964;      /* 属性 -> 薄荷绿 */
  --code-number: #f78c6c;        /* 数字 -> 珊瑚色 */
  --code-meta: #ff5370;          /* 元数据 -> 柔和红 */
  --code-selected-bg: #447344;   /* 选中背景 -> 深灰块 */

  /* --- UI 控件/原生菜单覆盖 --- */
  --active-file-bg-color: color-mix(in srgb, var(--primary-color), transparent 85%);
  --active-file-text-color: #ffffff;
  --item-hover-bg-color: rgba(76, 217, 100, 0.08);
  --menu-divider-color: rgba(76, 217, 100, 0.1);
  --window-border: 1px solid var(--primary-color) !important;

  --rawblock-edit-panel-bd: var(--item-hover-bg-color);
}`,sakura:`@import url(./phycat/phycat.light.css);

:root {
  /* 标题后小图标，借鉴自思源笔记主题——Savor */
  --h1-icon-shape: url("data:image/svg+xml;utf8,<svg fill='rgba(255, 176, 176, 0.5)' height='24' viewBox='0 0 32 32' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M4.8 29.714v0c-1.371 0-2.514-1.143-2.514-2.514v0c0-1.371 1.143-2.514 2.514-2.514v0c1.371 0 2.514 1.143 2.514 2.514v0c0.114 1.371-1.029 2.514-2.514 2.514z'/></svg>") no-repeat center;
  --h2-icon-shape: url("data:image/svg+xml;utf8,<svg fill='rgba(255, 176, 176, 0.5)' height='24' viewBox='0 0 32 32' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M11.429 25.143c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM4.571 18.286c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286z'/></svg>") no-repeat center;
  --h3-icon-shape: url("data:image/svg+xml;utf8,<svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'><path d='M4.571 25.143c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM4.571 18.286c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM11.429 25.143c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286z'/></svg>");
  --h4-icon-shape: url("data:image/svg+xml;utf8,<svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'><path d='M4.571 25.143c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM4.571 18.286c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM11.429 25.143c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM11.429 22.857c1.257 0 2.286-1.029 2.286-2.286s-1.029-2.286-2.286-2.286-2.286 1.029-2.286 2.286 1.029 2.286 2.286 2.286z'/></svg>");
  --h5-icon-shape: url("data:image/svg+xml;utf8,<svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'><path d='M4.571 18.286c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM11.429 22.857c1.257 0 2.286-1.029 2.286-2.286s-1.029-2.286-2.286-2.286-2.286 1.029-2.286 2.286 1.029 2.286 2.286 2.286zM4.571 25.143c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM11.429 25.143c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM4.571 11.429c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286z'/></svg>");
  --h6-icon-shape: url("data:image/svg+xml;utf8,<svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'><path d='M4.571 25.143c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM4.571 18.286c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM4.571 11.429c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM11.429 18.286c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM11.429 25.143c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM11.429 16c1.257 0 2.286-1.029 2.286-2.286s-1.029-2.286-2.286-2.286-2.286 1.029-2.286 2.286 1.029 2.286 2.286 2.286z'/></svg>");

  /* 文档背景样式 */
  /* 1. 交叉斜线 */
  --bg-shape-cross: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h30v30H0z' fill='none'/%3E%3Cpath d='M0 0L15 15M30 0L15 15M0 30L15 15M30 30L15 15' stroke='black' stroke-width='0.4'/%3E%3C/svg%3E");
  /* 2. 星点图案 */
  --bg-shape-star: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M10 10l2-6l2 6l6 2l-6 2l-2 6l-2-6l-6-2Z' fill='black'/%3E%3Cpath d='M30 15l1-3l1 3l3 1l-3 1l-1 3l-1-3l-3-1Z' fill='black'/%3E%3Cpath d='M25 30l1.5-4.5l1.5 4.5l4.5 1.5l-4.5 1.5l-1.5 4.5l-1.5-4.5l-4.5-1.5Z' fill='black'/%3E%3C/svg%3E");
  /* 3. 六边形图案 */
  --bg-shape-hex: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M10 5l10 0l5 8.66l-5 8.66l-10 0l-5-8.66Z' fill='none' stroke='black' stroke-width='0.4'/%3E%3Cpath d='M20 22.32l10 0l5 8.66l-5 8.66l-10 0l-5-8.66Z' fill='none' stroke='black' stroke-width='0.4'/%3E%3C/svg%3E");
  /* 4. 十字圆点 */
  --bg-shape-dot: url("data:image/svg+xml,%3Csvg width='15' height='15' viewBox='0 0 15 15' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='7.5' cy='7.5' r='0.5' fill='black'/%3E%3Ccircle cx='7.5' cy='2.5' r='0.5' fill='black'/%3E%3Ccircle cx='7.5' cy='12.5' r='0.5' fill='black'/%3E%3Ccircle cx='2.5' cy='7.5' r='0.5' fill='black'/%3E%3Ccircle cx='12.5' cy='7.5' r='0.5' fill='black'/%3E%3C/svg%3E");
  /* 5. 三角形 */
  --bg-shape-tri: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h30v30H0z' fill='none'/%3E%3Cpath d='M0 0L30 0L15 15Z' fill='black'/%3E%3Cpath d='M30 30L0 30L15 15Z' fill='black'/%3E%3C/svg%3E");
  /* 6. 方格网 */
  --bg-shape-grid: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v20H0z' fill='none'/%3E%3Cpath d='M20 0v20M0 20h20' stroke='black' stroke-width='0.7'/%3E%3C/svg%3E");
  /* 7. 无背景 (纯白背景) */
  --bg-shape-none: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=");

  /* 文档背景样式  none 无背景*/
  --bg-style: var(--bg-shape-none);


  /* 自动编号格式设置 无需自动编号可全部注释掉或部分注释掉*/
  --autonum-h1: counter(h1) ". ";
  --autonum-h2: counter(h1) "." counter(h2) ". ";
  --autonum-h3: counter(h1) "." counter(h2) "." counter(h3) ". ";
  /* --autonum-h4: counter(h1) "." counter(h2) "." counter(h3) "." counter(h4) ". ";
  --autonum-h5: counter(h1) "." counter(h2) "." counter(h3) "." counter(h4) "." counter(h5) ". ";
  --autonum-h6: counter(h1) "." counter(h2) "." counter(h3) "." counter(h4) "." counter(h5) "." counter(h6) ". "; */

  /* 下面是文章内Toc目录自动编号，与上面一样即可 */
  --autonum-h1toc: counter(h1toc) ". ";
  --autonum-h2toc: counter(h1toc) "." counter(h2toc) ". ";
  --autonum-h3toc: counter(h1toc) "." counter(h2toc) "." counter(h3toc) ". ";
  /* --autonum-h4toc: counter(h1toc) "." counter(h2toc) "." counter(h3toc) "." counter(h4toc) ". ";
  --autonum-h5toc: counter(h1toc) "." counter(h2toc) "." counter(h3toc) "." counter(h4toc) "." counter(h5toc) ". ";
  --autonum-h6toc: counter(h1toc) "." counter(h2toc) "." counter(h3toc) "." counter(h4toc) "." counter(h5toc) "." counter(h6toc) ". "; */


/* 标题主色：明亮的樱花粉 */
  --head-title-color: #ff7096;
  
  /* H2 渐变：柔和的粉白过渡 */
  --head-title-h2-color: #fff;
  --head-title-h2-background: linear-gradient(to right, #ffb7cd, #ff7096, #ffb7cd);
  
  /* 元素颜色 */
  --element-color: #ff7096;             /* 主色 */
  --element-color-deep: #e91e63;        /* 深粉红 (文字/强调) */
  --element-color-shallow: #ffb7cd;     /* 浅粉 (Mask图标) */
  --element-color-so-shallow: #ffe3ec;  /* 很浅粉 (高亮背景) */
  --element-color-soo-shallow: #fff0f5; /* 极浅粉 (LavenderBlush) */
  --glass-bg-color:#feebf259;

  /* 行内代码：深玫红 */
  --element-color-linecode: #c2185b;
  --element-color-linecode-background: #fce4ec;

  /* UI 颜色 */
  --appui-color: #ff7096;
  --appui-color-icon: #ff7096;
  --appui-color-text: #5e3a44; /* 暖褐色文字 */
  --primary-color: #ff7096;

  --rawblock-edit-panel-bd: var(--element-color-soo-shallow);
}
`,sky:`@import url(./phycat/phycat.light.css);

:root {
  /* 标题后小图标，借鉴自思源笔记主题——Savor */
  --h1-icon-shape: url("data:image/svg+xml;utf8,<svg fill='rgba(255, 176, 176, 0.5)' height='24' viewBox='0 0 32 32' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M4.8 29.714v0c-1.371 0-2.514-1.143-2.514-2.514v0c0-1.371 1.143-2.514 2.514-2.514v0c1.371 0 2.514 1.143 2.514 2.514v0c0.114 1.371-1.029 2.514-2.514 2.514z'/></svg>") no-repeat center;
  --h2-icon-shape: url("data:image/svg+xml;utf8,<svg fill='rgba(255, 176, 176, 0.5)' height='24' viewBox='0 0 32 32' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M11.429 25.143c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM4.571 18.286c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286z'/></svg>") no-repeat center;
  --h3-icon-shape: url("data:image/svg+xml;utf8,<svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'><path d='M4.571 25.143c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM4.571 18.286c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM11.429 25.143c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286z'/></svg>");
  --h4-icon-shape: url("data:image/svg+xml;utf8,<svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'><path d='M4.571 25.143c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM4.571 18.286c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM11.429 25.143c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM11.429 22.857c1.257 0 2.286-1.029 2.286-2.286s-1.029-2.286-2.286-2.286-2.286 1.029-2.286 2.286 1.029 2.286 2.286 2.286z'/></svg>");
  --h5-icon-shape: url("data:image/svg+xml;utf8,<svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'><path d='M4.571 18.286c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM11.429 22.857c1.257 0 2.286-1.029 2.286-2.286s-1.029-2.286-2.286-2.286-2.286 1.029-2.286 2.286 1.029 2.286 2.286 2.286zM4.571 25.143c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM11.429 25.143c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM4.571 11.429c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286z'/></svg>");
  --h6-icon-shape: url("data:image/svg+xml;utf8,<svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'><path d='M4.571 25.143c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM4.571 18.286c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM4.571 11.429c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM11.429 18.286c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM11.429 25.143c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM11.429 16c1.257 0 2.286-1.029 2.286-2.286s-1.029-2.286-2.286-2.286-2.286 1.029-2.286 2.286 1.029 2.286 2.286 2.286z'/></svg>");

  /* 文档背景样式 */
  /* 1. 交叉斜线 */
  --bg-shape-cross: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h30v30H0z' fill='none'/%3E%3Cpath d='M0 0L15 15M30 0L15 15M0 30L15 15M30 30L15 15' stroke='black' stroke-width='0.4'/%3E%3C/svg%3E");
  /* 2. 星点图案 */
  --bg-shape-star: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M10 10l2-6l2 6l6 2l-6 2l-2 6l-2-6l-6-2Z' fill='black'/%3E%3Cpath d='M30 15l1-3l1 3l3 1l-3 1l-1 3l-1-3l-3-1Z' fill='black'/%3E%3Cpath d='M25 30l1.5-4.5l1.5 4.5l4.5 1.5l-4.5 1.5l-1.5 4.5l-1.5-4.5l-4.5-1.5Z' fill='black'/%3E%3C/svg%3E");
  /* 3. 六边形图案 */
  --bg-shape-hex: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M10 5l10 0l5 8.66l-5 8.66l-10 0l-5-8.66Z' fill='none' stroke='black' stroke-width='0.4'/%3E%3Cpath d='M20 22.32l10 0l5 8.66l-5 8.66l-10 0l-5-8.66Z' fill='none' stroke='black' stroke-width='0.4'/%3E%3C/svg%3E");
  /* 4. 十字圆点 */
  --bg-shape-dot: url("data:image/svg+xml,%3Csvg width='15' height='15' viewBox='0 0 15 15' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='7.5' cy='7.5' r='0.5' fill='black'/%3E%3Ccircle cx='7.5' cy='2.5' r='0.5' fill='black'/%3E%3Ccircle cx='7.5' cy='12.5' r='0.5' fill='black'/%3E%3Ccircle cx='2.5' cy='7.5' r='0.5' fill='black'/%3E%3Ccircle cx='12.5' cy='7.5' r='0.5' fill='black'/%3E%3C/svg%3E");
  /* 5. 三角形 */
  --bg-shape-tri: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h30v30H0z' fill='none'/%3E%3Cpath d='M0 0L30 0L15 15Z' fill='black'/%3E%3Cpath d='M30 30L0 30L15 15Z' fill='black'/%3E%3C/svg%3E");
  /* 6. 方格网 */
  --bg-shape-grid: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v20H0z' fill='none'/%3E%3Cpath d='M20 0v20M0 20h20' stroke='black' stroke-width='0.7'/%3E%3C/svg%3E");
  /* 7. 无背景 (纯白背景) */
  --bg-shape-none: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=");

  /* 文档背景样式  none 无背景*/
  --bg-style: var(--bg-shape-cross);
  /* --bg-style:none; */

  /* 自动编号格式设置 无需自动编号可全部注释掉或部分注释掉*/
  /* --autonum-h1: counter(h1) ". ";
  --autonum-h2: counter(h1) "." counter(h2) ". ";
  --autonum-h3: counter(h1) "." counter(h2) "." counter(h3) ". ";
  --autonum-h4: counter(h1) "." counter(h2) "." counter(h3) "." counter(h4) ". ";
  --autonum-h5: counter(h1) "." counter(h2) "." counter(h3) "." counter(h4) "." counter(h5) ". ";
  --autonum-h6: counter(h1) "." counter(h2) "." counter(h3) "." counter(h4) "." counter(h5) "." counter(h6) ". "; */

  /* 下面是文章内Toc目录自动编号，与上面一样即可 */
  /* --autonum-h1toc: counter(h1toc) ". ";
  --autonum-h2toc: counter(h1toc) "." counter(h2toc) ". ";
  --autonum-h3toc: counter(h1toc) "." counter(h2toc) "." counter(h3toc) ". ";
  --autonum-h4toc: counter(h1toc) "." counter(h2toc) "." counter(h3toc) "." counter(h4toc) ". ";
  --autonum-h5toc: counter(h1toc) "." counter(h2toc) "." counter(h3toc) "." counter(h4toc) "." counter(h5toc) ". ";
  --autonum-h6toc: counter(h1toc) "." counter(h2toc) "." counter(h3toc) "." counter(h4toc) "." counter(h5toc) "." counter(h6toc) ". "; */


--head-title-color: #3498db;
  
  /* H2 渐变 */
  --head-title-h2-color: #fff;
  --head-title-h2-background: linear-gradient(to right, #85c1e9, #3498db, #85c1e9);
  
  /* 元素颜色 */
  --element-color: #3498db;             /* 核心蓝 */
  --element-color-deep: #2980b9;        /* 深蓝 */
  --element-color-shallow: #aed6f1;     /* 浅蓝 */
  --element-color-so-shallow: #eaf2f8;  /* 很浅蓝 */
  --element-color-soo-shallow: #f4faff; /* 极浅蓝 */

  /* 毛玻璃底色 透明度一定要很低 */
  --glass-bg-color:#cee6fa2b;

  /* 行内代码：深海蓝 */
  --element-color-linecode: #1a5276;
  --element-color-linecode-background: #ebf5fb;

  /* UI 颜色 */
  --appui-color: #3498db;
  --appui-color-icon: #3498db;
  --appui-color-text: #2c3e50;
  --primary-color: #3498db;

  --rawblock-edit-panel-bd: var(--element-color-soo-shallow);
}
`,vampire:`@import url(./phycat/phycat.dark.css);

:root {
  /* 标题后小图标，借鉴自思源笔记主题——Savor */
  --h1-icon-shape: url("data:image/svg+xml;utf8,<svg fill='rgba(255, 176, 176, 0.5)' height='24' viewBox='0 0 32 32' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M4.8 29.714v0c-1.371 0-2.514-1.143-2.514-2.514v0c0-1.371 1.143-2.514 2.514-2.514v0c1.371 0 2.514 1.143 2.514 2.514v0c0.114 1.371-1.029 2.514-2.514 2.514z'/></svg>") no-repeat center;
  --h2-icon-shape: url("data:image/svg+xml;utf8,<svg fill='rgba(255, 176, 176, 0.5)' height='24' viewBox='0 0 32 32' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M11.429 25.143c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM4.571 18.286c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286z'/></svg>") no-repeat center;
  --h3-icon-shape: url("data:image/svg+xml;utf8,<svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'><path d='M4.571 25.143c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM4.571 18.286c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM11.429 25.143c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286z'/></svg>");
  --h4-icon-shape: url("data:image/svg+xml;utf8,<svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'><path d='M4.571 25.143c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM4.571 18.286c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM11.429 25.143c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM11.429 22.857c1.257 0 2.286-1.029 2.286-2.286s-1.029-2.286-2.286-2.286-2.286 1.029-2.286 2.286 1.029 2.286 2.286 2.286z'/></svg>");
  --h5-icon-shape: url("data:image/svg+xml;utf8,<svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'><path d='M4.571 18.286c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM11.429 22.857c1.257 0 2.286-1.029 2.286-2.286s-1.029-2.286-2.286-2.286-2.286 1.029-2.286 2.286 1.029 2.286 2.286 2.286zM4.571 25.143c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM11.429 25.143c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM4.571 11.429c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286z'/></svg>");
  --h6-icon-shape: url("data:image/svg+xml;utf8,<svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'><path d='M4.571 25.143c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM4.571 18.286c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM4.571 11.429c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM11.429 18.286c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM11.429 25.143c-1.257 0-2.286 1.029-2.286 2.286s1.029 2.286 2.286 2.286 2.286-1.029 2.286-2.286-1.029-2.286-2.286-2.286zM11.429 16c1.257 0 2.286-1.029 2.286-2.286s-1.029-2.286-2.286-2.286-2.286 1.029-2.286 2.286 1.029 2.286 2.286 2.286z'/></svg>");

  /* 文档背景样式 */
  /* 1. 交叉斜线 */
  --bg-shape-cross: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h30v30H0z' fill='none'/%3E%3Cpath d='M0 0L15 15M30 0L15 15M0 30L15 15M30 30L15 15' stroke='black' stroke-width='0.4'/%3E%3C/svg%3E");
  /* 2. 星点图案 */
  --bg-shape-star: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M10 10l2-6l2 6l6 2l-6 2l-2 6l-2-6l-6-2Z' fill='black'/%3E%3Cpath d='M30 15l1-3l1 3l3 1l-3 1l-1 3l-1-3l-3-1Z' fill='black'/%3E%3Cpath d='M25 30l1.5-4.5l1.5 4.5l4.5 1.5l-4.5 1.5l-1.5 4.5l-1.5-4.5l-4.5-1.5Z' fill='black'/%3E%3C/svg%3E");
  /* 3. 六边形图案 */
  --bg-shape-hex: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M10 5l10 0l5 8.66l-5 8.66l-10 0l-5-8.66Z' fill='none' stroke='black' stroke-width='0.4'/%3E%3Cpath d='M20 22.32l10 0l5 8.66l-5 8.66l-10 0l-5-8.66Z' fill='none' stroke='black' stroke-width='0.4'/%3E%3C/svg%3E");
  /* 4. 十字圆点 */
  --bg-shape-dot: url("data:image/svg+xml,%3Csvg width='15' height='15' viewBox='0 0 15 15' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='7.5' cy='7.5' r='0.5' fill='black'/%3E%3Ccircle cx='7.5' cy='2.5' r='0.5' fill='black'/%3E%3Ccircle cx='7.5' cy='12.5' r='0.5' fill='black'/%3E%3Ccircle cx='2.5' cy='7.5' r='0.5' fill='black'/%3E%3Ccircle cx='12.5' cy='7.5' r='0.5' fill='black'/%3E%3C/svg%3E");
  /* 5. 三角形 */
  --bg-shape-tri: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h30v30H0z' fill='none'/%3E%3Cpath d='M0 0L30 0L15 15Z' fill='black'/%3E%3Cpath d='M30 30L0 30L15 15Z' fill='black'/%3E%3C/svg%3E");
  /* 6. 方格网 */
  --bg-shape-grid: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v20H0z' fill='none'/%3E%3Cpath d='M20 0v20M0 20h20' stroke='black' stroke-width='0.7'/%3E%3C/svg%3E");
  /* 7. 无背景 (纯白背景) */
  --bg-shape-none: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=");

  /* 文档背景样式  none 无背景*/
  --bg-style: radial-gradient(#ffffff 1px, transparent 1px);
  /* --- 页面纹理 --- */
  --texture-mask-color: #bd93f9;
  --texture-opacity: 0.05;

  /* 自动编号格式设置 无需自动编号可全部注释掉或部分注释掉*/
  /*  --autonum-h1: counter(h1) ". ";
  --autonum-h2: counter(h1) "." counter(h2) ". ";
  --autonum-h3: counter(h1) "." counter(h2) "." counter(h3) ". ";
 --autonum-h4: counter(h1) "." counter(h2) "." counter(h3) "." counter(h4) ". ";
  --autonum-h5: counter(h1) "." counter(h2) "." counter(h3) "." counter(h4) "." counter(h5) ". ";
  --autonum-h6: counter(h1) "." counter(h2) "." counter(h3) "." counter(h4) "." counter(h5) "." counter(h6) ". "; */

  /* 下面是文章内Toc目录自动编号，与上面一样即可 */
  /* --autonum-h1toc: counter(h1toc) ". ";
  --autonum-h2toc: counter(h1toc) "." counter(h2toc) ". ";
  --autonum-h3toc: counter(h1toc) "." counter(h2toc) "." counter(h3toc) ". ";
  --autonum-h4toc: counter(h1toc) "." counter(h2toc) "." counter(h3toc) "." counter(h4toc) ". ";
  --autonum-h5toc: counter(h1toc) "." counter(h2toc) "." counter(h3toc) "." counter(h4toc) "." counter(h5toc) ". ";
  --autonum-h6toc: counter(h1toc) "." counter(h2toc) "." counter(h3toc) "." counter(h4toc) "." counter(h5toc) "." counter(h6toc) ". "; */



  /* --- 基础背景与文字 --- */
  --bg-color: #282a36;
  /* 深邃的蓝紫色背景 */
  --text-color: #f8f8f2;
  /* 灰白主文字 */
  --text-color-secondary: #d0d0d0;
  /* 段落文字，稍暗 */

  /* --- 核心品牌色 --- */
  --primary-color: #ff5555;
  /* 吸血鬼红 (强调色) */
  --secondary-color: #bd93f9;
  /* 神秘紫 (辅助色) */
  --accent-color: #8be9fd;
  /* 青色 (链接/高亮) */
  --border-color: #44475a;
  /* 暗色边框 */


  /* --- 光晕特效变量 --- */
  --glow-color: rgba(255, 85, 85, 0.6);
  /* 淡淡的光晕颜色 */
  --glow-shadow-text: 0 0 8px var(--glow-color);
  /* 文字光晕 */
  --glow-shadow-box: 0 0 8px var(--glow-color);
  /* 盒子/圆点光晕 */
  --hover-background-color: rgb(255, 85, 85);
  /* Hover时背景 */
  --select-text-bg-color: rgba(255, 85, 85, 0.3);
  /* 鼠标选中背景 */

  /* --- H1 标题 --- */
  --h1-color: var(--text-color);
  --h1-underline-color: var(--primary-color);

  /* --- H2 标题 (霓虹边框) --- */
  --h2-bg-image: radial-gradient(ellipse at center bottom, rgba(255, 85, 85, 0.15), transparent 70%);

  /* 其他变量 */
  --code-block-bg: rgba(0, 0, 0, 0.3);
  --glass-border-color: rgba(255, 255, 255, 0.05);

  /* 代码高亮颜色 */
  --code-keyword: #ff79c6;
  /* 关键字/标签/运算符 (粉) */
  --code-variable: #f8f8f2;
  /* 变量 (白) */
  --code-function: #50fa7b;
  /* 函数名/属性名 (绿) */
  --code-param: #f1fa8c;
  /* 参数 (黄) */
  --code-string: #f1fa8c;
  /* 字符串 (黄) */
  --code-comment: #6272a4;
  /* 注释 (蓝灰) */
  --code-type: #8be9fd;
  /* 类型/链接/内置 (青) */
  --code-property: #66d9ef;
  /* 对象属性 (深青) */
  --code-number: #bd93f9;
  /* 数字 (紫) */
  --code-meta: #ffb86c;
  /* 元数据 (橙) */
  --code-selected-bg: #44475a;
  /* 选中文本背景 */

  /* --- UI 控件/原生菜单覆盖--- */
  --active-file-bg-color: color-mix(in srgb, var(--primary-color), transparent 85%);
  --active-file-text-color: #ffffff;
  --item-hover-bg-color: rgba(22, 22, 22, 0.14);
  --menu-divider-color: rgba(255, 255, 255, 0.05);
  --window-border: 1px solid var(--primary-color) !important;

  --rawblock-edit-panel-bd: var(--item-hover-bg-color);
}`},x=[{id:`mint`,name:`薄荷`,description:`清透青绿`,mode:`light`,colors:[`#3db8bf`,`#80f7c4`,`#e8fffb`],pageBackground:`#ecfbf8`,pageSurface:`#f8fffd`,pageText:`#203538`,pageMuted:`#5d7477`,css:b.mint},{id:`sky`,name:`晴空`,description:`明亮蓝色`,mode:`light`,colors:[`#3b82f6`,`#7dd3fc`,`#eff8ff`],pageBackground:`#edf7ff`,pageSurface:`#f8fcff`,pageText:`#20364d`,pageMuted:`#60768c`,css:b.sky},{id:`sakura`,name:`樱花`,description:`柔和粉色`,mode:`light`,colors:[`#ec7fa9`,`#f9b4cb`,`#fff2f7`],pageBackground:`#fff1f6`,pageSurface:`#fff9fb`,pageText:`#4a2936`,pageMuted:`#80616d`,css:b.sakura},{id:`caramel`,name:`焦糖`,description:`温暖琥珀`,mode:`light`,colors:[`#c77d30`,`#efb366`,`#fff7e8`],pageBackground:`#fff5e4`,pageSurface:`#fffaf2`,pageText:`#463524`,pageMuted:`#806b55`,css:b.caramel},{id:`cherry`,name:`樱桃`,description:`清醒红调`,mode:`light`,colors:[`#d94c64`,`#f28a9c`,`#fff1f3`],pageBackground:`#fff0f2`,pageSurface:`#fff8f9`,pageText:`#492a30`,pageMuted:`#806067`,css:b.cherry},{id:`forest`,name:`森林`,description:`自然深绿`,mode:`light`,colors:[`#3f7d58`,`#79b791`,`#eff8f1`],pageBackground:`#edf7ef`,pageSurface:`#f8fcf9`,pageText:`#26392c`,pageMuted:`#627568`,css:b.forest},{id:`mauve`,name:`木槿`,description:`克制紫灰`,mode:`light`,colors:[`#8b6f9e`,`#baa2c8`,`#f8f2fb`],pageBackground:`#f7f0fa`,pageSurface:`#fcf9fd`,pageText:`#3d3144`,pageMuted:`#74667b`,css:b.mauve},{id:`prussian`,name:`普鲁士蓝`,description:`沉静蓝灰`,mode:`light`,colors:[`#315a7d`,`#72a0c1`,`#eff6fb`],pageBackground:`#edf5fa`,pageSurface:`#f8fbfd`,pageText:`#263947`,pageMuted:`#627582`,css:b.prussian},{id:`abyss`,name:`深渊`,description:`冷静暗蓝`,mode:`dark`,colors:[`#38bdf8`,`#1e3a5f`,`#08111f`],pageBackground:`#0f111a`,pageSurface:`#171a26`,pageText:`#d6deeb`,pageMuted:`#7e8c9f`,css:b.abyss},{id:`radiation`,name:`辐光`,description:`高能荧光`,mode:`dark`,colors:[`#c7f464`,`#5c7c24`,`#11180b`],pageBackground:`#1b1d1b`,pageSurface:`#242824`,pageText:`#e6e6e6`,pageMuted:`#99a699`,css:b.radiation},{id:`vampire`,name:`夜宴`,description:`暗红黑色`,mode:`dark`,colors:[`#ef6f83`,`#7f1d32`,`#16090d`],pageBackground:`#282a36`,pageSurface:`#303241`,pageText:`#f8f8f2`,pageMuted:`#b8b8b2`,css:b.vampire}],re=`
:host {
  display: block;
  color-scheme: light dark;
  font-family: Optima, "Segoe UI", "PingFang SC", "Microsoft YaHei", sans-serif;
  --bg-style: none;
}

#write {
  --autonum-h1: "";
  --autonum-h2: "";
  --autonum-h3: "";
  --autonum-h4: "";
  --autonum-h5: "";
  --autonum-h6: "";
  --autonum-h1toc: "";
  --autonum-h2toc: "";
  --autonum-h3toc: "";
  --autonum-h4toc: "";
  --autonum-h5toc: "";
  --autonum-h6toc: "";
}

#write[data-heading-numbers="true"] {
  --autonum-h1: counter(h1) ". ";
  --autonum-h2: counter(h1) "." counter(h2) ". ";
  --autonum-h3: counter(h1) "." counter(h2) "." counter(h3) ". ";
  --autonum-h4: counter(h1) "." counter(h2) "." counter(h3) "." counter(h4) ". ";
  --autonum-h5: counter(h1) "." counter(h2) "." counter(h3) "." counter(h4) "." counter(h5) ". ";
  --autonum-h6: counter(h1) "." counter(h2) "." counter(h3) "." counter(h4) "." counter(h5) "." counter(h6) ". ";
  --autonum-h1toc: counter(h1toc) ". ";
  --autonum-h2toc: counter(h1toc) "." counter(h2toc) ". ";
  --autonum-h3toc: counter(h1toc) "." counter(h2toc) "." counter(h3toc) ". ";
  --autonum-h4toc: counter(h1toc) "." counter(h2toc) "." counter(h3toc) "." counter(h4toc) ". ";
  --autonum-h5toc: counter(h1toc) "." counter(h2toc) "." counter(h3toc) "." counter(h4toc) "." counter(h5toc) ". ";
  --autonum-h6toc: counter(h1toc) "." counter(h2toc) "." counter(h3toc) "." counter(h4toc) "." counter(h5toc) "." counter(h6toc) ". ";
}

*, *::before, *::after {
  box-sizing: border-box;
}

#write {
  width: 100%;
  max-width: none;
  min-height: 240px;
  margin: 0;
  padding: 1.4rem 1.5rem 1.8rem;
  border-radius: 0;
  background: transparent;
}

#write::before {
  display: none;
}

#write > *:first-child {
  margin-top: 0;
}

#write > *:last-child {
  margin-bottom: 0;
}

#write .md-heading-anchor {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  opacity: 0;
}

#write .table-wrapper {
  width: 100%;
  overflow-x: auto;
}

#write .code-block {
  width: 100%;
  margin: 1.25rem 0;
  padding: 0;
  overflow: hidden;
  border-radius: 8px;
}

#write .code-block > .md-fencescode {
  display: block;
  width: 100%;
  margin: 0;
  padding: 1rem 1.2rem 1.15rem;
  overflow-x: auto;
  border-radius: 0 0 8px 8px;
  font-family: CascadiaCode, "Cascadia Code", "SFMono-Regular", Consolas, "Liberation Mono", monospace;
  font-size: 0.9em;
  line-height: 1.7;
  tab-size: 2;
  white-space: pre;
}

#write .escaped-html {
  white-space: pre-wrap;
}

#write img {
  max-width: 100%;
  height: auto;
}

@media (max-width: 640px) {
  #write {
    padding: 1rem 0.9rem 1.35rem;
    line-height: 1.9;
  }
}
`;function ie(e){return e.replace(/@import\s+url\([^;]+;/gi,``).replace(/@font-face\s*\{[\s\S]*?\}/gi,``).replace(/@page\s*\{[\s\S]*?\}/gi,``).replace(/:root/g,`:host`)}var S=new Map;function C(e){return x.find(t=>t.id===e)??x[0]}function w(e){let t=S.get(e);if(t)return t;let n=C(e),r=n.mode===`dark`?ne:y,i=n.mode===`dark`?`
:host {
  color-scheme: dark;
  background: ${n.pageBackground};
}

#write {
  color: var(--text-color, #e5e7eb);
  background-color: transparent;
}

#write p,
#write li,
#write td,
#write figcaption {
  color: var(--text-color, #e5e7eb);
}

#write .code-block {
  border: 1px solid color-mix(in srgb, var(--primary-color, #8b9cff) 28%, transparent);
  background-color: var(--code-block-bg, #202330);
}

#write .code-block > .md-fencescode {
  color: var(--text-color, #e5e7eb);
  background-color: var(--code-block-bg, #202330);
}
`:`
:host {
  color-scheme: light;
  background: ${n.pageBackground};
}

#write {
  color: ${n.pageText};
  background-color: transparent;
}

#write .code-block {
  border: 1px solid color-mix(in srgb, var(--element-color) 18%, #d7dce1);
  background-color: #f8f8f8;
}

#write .code-block > .md-fencescode {
  color: #344054;
  background-color: color-mix(in srgb, var(--element-color) 5%, #fbfcfd);
}
`,a=`${ie(r)}\n${ie(n.css)}\n${re}\n${i}`;return S.set(e,a),a}var ae=`blog-markdown-theme`,oe=`blog-markdown-heading-numbers`;function se(){let e=localStorage.getItem(ae);return e&&x.some(t=>t.id===e)?e:`mint`}var ce=f(se()),le=f(localStorage.getItem(oe)===`true`);function ue(){let e=g(()=>C(ce.value)),t=g(()=>{let t=e.value;return{"--reader-primary":t.colors[0],"--reader-background":t.pageBackground,"--reader-surface":t.pageSurface,"--reader-text":t.pageText,"--reader-muted":t.pageMuted,"--reader-border":t.mode===`dark`?`color-mix(in srgb, ${t.colors[0]} 18%, ${t.pageSurface})`:`color-mix(in srgb, ${t.colors[0]} 22%, ${t.pageSurface})`,"--reader-shadow":t.mode===`dark`?`0 18px 48px rgba(0, 0, 0, 0.28)`:`0 18px 48px rgba(40, 65, 70, 0.09)`}});function n(e){ce.value=e,localStorage.setItem(ae,e)}function r(e){le.value=e,localStorage.setItem(oe,String(e))}function i(){r(!le.value)}return{markdownThemes:x,selectedTheme:e,selectedThemeId:ce,pageThemeStyle:t,headingNumbersEnabled:le,setMarkdownTheme:n,setHeadingNumbers:r,toggleHeadingNumbers:i}}function T(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var E=T();function de(e){E=e}var D={exec:()=>null};function O(e){let t=[];return n=>{let r=Math.max(0,Math.min(3,n-1)),i=t[r];return i||(i=e(r),t[r]=i),i}}function k(e,t=``){let n=typeof e==`string`?e:e.source,r={replace:(e,t)=>{let i=typeof t==`string`?t:t.source;return i=i.replace(A.caret,`$1`),n=n.replace(e,i),r},getRegex:()=>new RegExp(n,t)};return r}var fe=((e=``)=>{try{return!!RegExp(`(?<=1)(?<!1)`+e)}catch{return!1}})(),A={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:O(e=>RegExp(`^ {0,${e}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)),hrRegex:O(e=>RegExp(`^ {0,${e}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`)),fencesBeginRegex:O(e=>RegExp(`^ {0,${e}}(?:\`\`\`|~~~)`)),headingBeginRegex:O(e=>RegExp(`^ {0,${e}}#`)),htmlBeginRegex:O(e=>RegExp(`^ {0,${e}}<(?:[a-z].*>|!--)`,`i`)),blockquoteBeginRegex:O(e=>RegExp(`^ {0,${e}}>`))},pe=/^(?:[ \t]*(?:\n|$))+/,me=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,he=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,j=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,ge=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,_e=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,ve=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,ye=k(ve).replace(/bull/g,_e).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,``).getRegex(),be=k(ve).replace(/bull/g,_e).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),xe=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Se=/^[^\n]+/,Ce=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,we=k(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace(`label`,Ce).replace(`title`,/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Te=k(/^(bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,_e).getRegex(),M=`address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul`,N=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Ee=k(`^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))`,`i`).replace(`comment`,N).replace(`tag`,M).replace(`attribute`,/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),De=k(xe).replace(`hr`,j).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,M).getRegex(),P={blockquote:k(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace(`paragraph`,De).getRegex(),code:me,def:we,fences:he,heading:ge,hr:j,html:Ee,lheading:ye,list:Te,newline:pe,paragraph:De,table:D,text:Se},Oe=k(`^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)`).replace(`hr`,j).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`blockquote`,` {0,3}>`).replace(`code`,`(?: {4}| {0,3}	)[^\\n]`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,M).getRegex(),ke={...P,lheading:be,table:Oe,paragraph:k(xe).replace(`hr`,j).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`table`,Oe).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,M).getRegex()},Ae={...P,html:k(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace(`comment`,N).replace(/tag/g,`(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b`).getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:D,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:k(xe).replace(`hr`,j).replace(`heading`,` *#{1,6} *[^
]`).replace(`lheading`,ye).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`|fences`,``).replace(`|list`,``).replace(`|html`,``).replace(`|tag`,``).getRegex()},je=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Me=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Ne=/^( {2,}|\\)\n(?!\s*$)/,Pe=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,F=/[\p{P}\p{S}]/u,I=/[\s\p{P}\p{S}]/u,L=/[^\s\p{P}\p{S}]/u,Fe=k(/^((?![*_])punctSpace)/,`u`).replace(/punctSpace/g,I).getRegex(),Ie=/(?!~)[\p{P}\p{S}]/u,Le=/(?!~)[\s\p{P}\p{S}]/u,Re=/(?:[^\s\p{P}\p{S}]|~)/u,ze=k(/link|precode-code|html/,`g`).replace(`link`,/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace(`precode-`,fe?"(?<!`)()":"(^^|[^`])").replace(`code`,/(?<b>`+)[^`]+\k<b>(?!`)/).replace(`html`,/<(?! )[^<>]*?>/).getRegex(),Be=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,Ve=k(Be,`u`).replace(/punct/g,F).getRegex(),He=k(Be,`u`).replace(/punct/g,Ie).getRegex(),Ue=`^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)`,We=k(Ue,`gu`).replace(/notPunctSpace/g,L).replace(/punctSpace/g,I).replace(/punct/g,F).getRegex(),Ge=k(Ue,`gu`).replace(/notPunctSpace/g,Re).replace(/punctSpace/g,Le).replace(/punct/g,Ie).getRegex(),Ke=k(`^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)`,`gu`).replace(/notPunctSpace/g,L).replace(/punctSpace/g,I).replace(/punct/g,F).getRegex(),qe=k(/^~~?(?:((?!~)punct)|[^\s~])/,`u`).replace(/punct/g,F).getRegex(),Je=k(`^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)`,`gu`).replace(/notPunctSpace/g,L).replace(/punctSpace/g,I).replace(/punct/g,F).getRegex(),Ye=k(/\\(punct)/,`gu`).replace(/punct/g,F).getRegex(),Xe=k(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace(`scheme`,/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace(`email`,/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Ze=k(N).replace(`(?:-->|$)`,`-->`).getRegex(),Qe=k(`^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>`).replace(`comment`,Ze).replace(`attribute`,/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),R=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/,$e=k(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace(`label`,R).replace(`href`,/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace(`title`,/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),et=k(/^!?\[(label)\]\[(ref)\]/).replace(`label`,R).replace(`ref`,Ce).getRegex(),tt=k(/^!?\[(ref)\](?:\[\])?/).replace(`ref`,Ce).getRegex(),nt=k(`reflink|nolink(?!\\()`,`g`).replace(`reflink`,et).replace(`nolink`,tt).getRegex(),rt=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,z={_backpedal:D,anyPunctuation:Ye,autolink:Xe,blockSkip:ze,br:Ne,code:Me,del:D,delLDelim:D,delRDelim:D,emStrongLDelim:Ve,emStrongRDelimAst:We,emStrongRDelimUnd:Ke,escape:je,link:$e,nolink:tt,punctuation:Fe,reflink:et,reflinkSearch:nt,tag:Qe,text:Pe,url:D},it={...z,link:k(/^!?\[(label)\]\((.*?)\)/).replace(`label`,R).getRegex(),reflink:k(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace(`label`,R).getRegex()},B={...z,emStrongRDelimAst:Ge,emStrongLDelim:He,delLDelim:qe,delRDelim:Je,url:k(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace(`protocol`,rt).replace(`email`,/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:k(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace(`protocol`,rt).getRegex()},at={...B,br:k(Ne).replace(`{2,}`,`*`).getRegex(),text:k(B.text).replace(`\\b_`,`\\b_| {2,}\\n`).replace(/\{2,\}/g,`*`).getRegex()},V={normal:P,gfm:ke,pedantic:Ae},H={normal:z,gfm:B,breaks:at,pedantic:it},ot={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},st=e=>ot[e];function U(e,t){if(t){if(A.escapeTest.test(e))return e.replace(A.escapeReplace,st)}else if(A.escapeTestNoEncode.test(e))return e.replace(A.escapeReplaceNoEncode,st);return e}function ct(e){try{e=encodeURI(e).replace(A.percentDecode,`%`)}catch{return null}return e}function lt(e,t){let n=e.replace(A.findPipe,(e,t,n)=>{let r=!1,i=t;for(;--i>=0&&n[i]===`\\`;)r=!r;return r?`|`:` |`}).split(A.splitPipe),r=0;if(n[0].trim()||n.shift(),n.length>0&&!n.at(-1)?.trim()&&n.pop(),t)if(n.length>t)n.splice(t);else for(;n.length<t;)n.push(``);for(;r<n.length;r++)n[r]=n[r].trim().replace(A.slashPipe,`|`);return n}function W(e,t,n){let r=e.length;if(r===0)return``;let i=0;for(;i<r;){let a=e.charAt(r-i-1);if(a===t&&!n)i++;else if(a!==t&&n)i++;else break}return e.slice(0,r-i)}function ut(e){let t=e.split(`
`),n=t.length-1;for(;n>=0&&A.blankLine.test(t[n]);)n--;return t.length-n<=2?e:t.slice(0,n+1).join(`
`)}function dt(e,t){if(e.indexOf(t[1])===-1)return-1;let n=0;for(let r=0;r<e.length;r++)if(e[r]===`\\`)r++;else if(e[r]===t[0])n++;else if(e[r]===t[1]&&(n--,n<0))return r;return n>0?-2:-1}function ft(e,t=0){let n=t,r=``;for(let t of e)if(t===`	`){let e=4-n%4;r+=` `.repeat(e),n+=e}else r+=t,n++;return r}function pt(e,t,n,r,i){let a=t.href,o=t.title||null,s=e[1].replace(i.other.outputLinkReplace,`$1`);r.state.inLink=!0;let c={type:e[0].charAt(0)===`!`?`image`:`link`,raw:n,href:a,title:o,text:s,tokens:r.inlineTokens(s)};return r.state.inLink=!1,c}function mt(e,t,n){let r=e.match(n.other.indentCodeCompensation);if(r===null)return t;let i=r[1];return t.split(`
`).map(e=>{let t=e.match(n.other.beginningSpace);if(t===null)return e;let[r]=t;return r.length>=i.length?e.slice(i.length):e}).join(`
`)}var G=class{options;rules;lexer;constructor(e){this.options=e||E}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:`space`,raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let e=this.options.pedantic?t[0]:ut(t[0]);return{type:`code`,raw:e,codeBlockStyle:`indented`,text:e.replace(this.rules.other.codeRemoveIndent,``)}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let e=t[0],n=mt(e,t[3]||``,this.rules);return{type:`code`,raw:e,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,`$1`):t[2],text:n}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(this.rules.other.endingHash.test(e)){let t=W(e,`#`);(this.options.pedantic||!t||this.rules.other.endingSpaceChar.test(t))&&(e=t.trim())}return{type:`heading`,raw:W(t[0],`
`),depth:t[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:`hr`,raw:W(t[0],`
`)}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let e=W(t[0],`
`).split(`
`),n=``,r=``,i=[];for(;e.length>0;){let t=!1,a=[],o;for(o=0;o<e.length;o++)if(this.rules.other.blockquoteStart.test(e[o]))a.push(e[o]),t=!0;else if(!t)a.push(e[o]);else break;e=e.slice(o);let s=a.join(`
`),c=s.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,``);n=n?`${n}
${s}`:s,r=r?`${r}
${c}`:c;let l=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(c,i,!0),this.lexer.state.top=l,e.length===0)break;let u=i.at(-1);if(u?.type===`code`)break;if(u?.type===`blockquote`){let t=u,a=t.raw+`
`+e.join(`
`),o=this.blockquote(a);i[i.length-1]=o,n=n.substring(0,n.length-t.raw.length)+o.raw,r=r.substring(0,r.length-t.text.length)+o.text;break}else if(u?.type===`list`){let t=u,a=t.raw+`
`+e.join(`
`),o=this.list(a);i[i.length-1]=o,n=n.substring(0,n.length-u.raw.length)+o.raw,r=r.substring(0,r.length-t.raw.length)+o.raw,e=a.substring(i.at(-1).raw.length).split(`
`);continue}}return{type:`blockquote`,raw:n,tokens:i,text:r}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim(),r=n.length>1,i={type:`list`,raw:``,ordered:r,start:r?+n.slice(0,-1):``,loose:!1,items:[]};n=r?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=r?n:`[*+-]`);let a=this.rules.other.listItemRegex(n),o=!1;for(;e;){let n=!1,r=``,s=``;if(!(t=a.exec(e))||this.rules.block.hr.test(e))break;r=t[0],e=e.substring(r.length);let c=ft(t[2].split(`
`,1)[0],t[1].length),l=e.split(`
`,1)[0],u=!c.trim(),d=0;if(this.options.pedantic?(d=2,s=c.trimStart()):u?d=t[1].length+1:(d=c.search(this.rules.other.nonSpaceChar),d=d>4?1:d,s=c.slice(d),d+=t[1].length),u&&this.rules.other.blankLine.test(l)&&(r+=l+`
`,e=e.substring(l.length+1),n=!0),!n){let t=this.rules.other.nextBulletRegex(d),n=this.rules.other.hrRegex(d),i=this.rules.other.fencesBeginRegex(d),a=this.rules.other.headingBeginRegex(d),o=this.rules.other.htmlBeginRegex(d),f=this.rules.other.blockquoteBeginRegex(d);for(;e;){let p=e.split(`
`,1)[0],m;if(l=p,this.options.pedantic?(l=l.replace(this.rules.other.listReplaceNesting,`  `),m=l):m=l.replace(this.rules.other.tabCharGlobal,`    `),i.test(l)||a.test(l)||o.test(l)||f.test(l)||t.test(l)||n.test(l))break;if(m.search(this.rules.other.nonSpaceChar)>=d||!l.trim())s+=`
`+m.slice(d);else{if(u||c.replace(this.rules.other.tabCharGlobal,`    `).search(this.rules.other.nonSpaceChar)>=4||i.test(c)||a.test(c)||n.test(c))break;s+=`
`+l}u=!l.trim(),r+=p+`
`,e=e.substring(p.length+1),c=m.slice(d)}}i.loose||(o?i.loose=!0:this.rules.other.doubleBlankLine.test(r)&&(o=!0)),i.items.push({type:`list_item`,raw:r,task:!!this.options.gfm&&this.rules.other.listIsTask.test(s),loose:!1,text:s,tokens:[]}),i.raw+=r}let s=i.items.at(-1);if(s)s.raw=s.raw.trimEnd(),s.text=s.text.trimEnd();else return;i.raw=i.raw.trimEnd();for(let e of i.items){this.lexer.state.top=!1,e.tokens=this.lexer.blockTokens(e.text,[]);let t=e.tokens[0];if(e.task&&(t?.type===`text`||t?.type===`paragraph`)){e.text=e.text.replace(this.rules.other.listReplaceTask,``),t.raw=t.raw.replace(this.rules.other.listReplaceTask,``),t.text=t.text.replace(this.rules.other.listReplaceTask,``);for(let e=this.lexer.inlineQueue.length-1;e>=0;e--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[e].src)){this.lexer.inlineQueue[e].src=this.lexer.inlineQueue[e].src.replace(this.rules.other.listReplaceTask,``);break}let n=this.rules.other.listTaskCheckbox.exec(e.raw);if(n){let t={type:`checkbox`,raw:n[0]+` `,checked:n[0]!==`[ ]`};e.checked=t.checked,i.loose?e.tokens[0]&&[`paragraph`,`text`].includes(e.tokens[0].type)&&`tokens`in e.tokens[0]&&e.tokens[0].tokens?(e.tokens[0].raw=t.raw+e.tokens[0].raw,e.tokens[0].text=t.raw+e.tokens[0].text,e.tokens[0].tokens.unshift(t)):e.tokens.unshift({type:`paragraph`,raw:t.raw,text:t.raw,tokens:[t]}):e.tokens.unshift(t)}}else e.task&&=!1;if(!i.loose){let t=e.tokens.filter(e=>e.type===`space`);i.loose=t.length>0&&t.some(e=>this.rules.other.anyLine.test(e.raw))}}if(i.loose)for(let e of i.items){e.loose=!0;for(let t of e.tokens)t.type===`text`&&(t.type=`paragraph`)}return i}}html(e){let t=this.rules.block.html.exec(e);if(t){let e=ut(t[0]);return{type:`html`,block:!0,raw:e,pre:t[1]===`pre`||t[1]===`script`||t[1]===`style`,text:e}}}def(e){let t=this.rules.block.def.exec(e);if(t){let e=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal,` `),n=t[2]?t[2].replace(this.rules.other.hrefBrackets,`$1`).replace(this.rules.inline.anyPunctuation,`$1`):``,r=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,`$1`):t[3];return{type:`def`,tag:e,raw:W(t[0],`
`),href:n,title:r}}}table(e){let t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let n=lt(t[1]),r=t[2].replace(this.rules.other.tableAlignChars,``).split(`|`),i=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,``).split(`
`):[],a={type:`table`,raw:W(t[0],`
`),header:[],align:[],rows:[]};if(n.length===r.length){for(let e of r)this.rules.other.tableAlignRight.test(e)?a.align.push(`right`):this.rules.other.tableAlignCenter.test(e)?a.align.push(`center`):this.rules.other.tableAlignLeft.test(e)?a.align.push(`left`):a.align.push(null);for(let e=0;e<n.length;e++)a.header.push({text:n[e],tokens:this.lexer.inline(n[e]),header:!0,align:a.align[e]});for(let e of i)a.rows.push(lt(e,a.header.length).map((e,t)=>({text:e,tokens:this.lexer.inline(e),header:!1,align:a.align[t]})));return a}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t){let e=t[1].trim();return{type:`heading`,raw:W(t[0],`
`),depth:t[2].charAt(0)===`=`?1:2,text:e,tokens:this.lexer.inline(e)}}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let e=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:`paragraph`,raw:t[0],text:e,tokens:this.lexer.inline(e)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:`text`,raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:`escape`,raw:t[0],text:t[1]}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:`html`,raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){let t=this.rules.inline.link.exec(e);if(t){let e=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(e)){if(!this.rules.other.endAngleBracket.test(e))return;let t=W(e.slice(0,-1),`\\`);if((e.length-t.length)%2==0)return}else{let e=dt(t[2],`()`);if(e===-2)return;if(e>-1){let n=(t[0].indexOf(`!`)===0?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,n).trim(),t[3]=``}}let n=t[2],r=``;if(this.options.pedantic){let e=this.rules.other.pedanticHrefTitle.exec(n);e&&(n=e[1],r=e[3])}else r=t[3]?t[3].slice(1,-1):``;return n=n.trim(),this.rules.other.startAngleBracket.test(n)&&(n=this.options.pedantic&&!this.rules.other.endAngleBracket.test(e)?n.slice(1):n.slice(1,-1)),pt(t,{href:n&&n.replace(this.rules.inline.anyPunctuation,`$1`),title:r&&r.replace(this.rules.inline.anyPunctuation,`$1`)},t[0],this.lexer,this.rules)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let e=t[(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal,` `).toLowerCase()];if(!e){let e=n[0].charAt(0);return{type:`text`,raw:e,text:e}}return pt(n,e,n[0],this.lexer,this.rules)}}emStrong(e,t,n=``){let r=this.rules.inline.emStrongLDelim.exec(e);if(!(!r||!r[1]&&!r[2]&&!r[3]&&!r[4]||r[4]&&n.match(this.rules.other.unicodeAlphaNumeric))&&(!(r[1]||r[3])||!n||this.rules.inline.punctuation.exec(n))){let n=[...r[0]].length-1,i,a,o=n,s=0,c=r[0][0]===`*`?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(c.lastIndex=0,t=t.slice(-1*e.length+n);(r=c.exec(t))!==null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i)continue;if(a=[...i].length,r[3]||r[4]){o+=a;continue}else if((r[5]||r[6])&&n%3&&!((n+a)%3)){s+=a;continue}if(o-=a,o>0)continue;a=Math.min(a,a+o+s);let t=[...r[0]][0].length,c=e.slice(0,n+r.index+t+a);if(Math.min(n,a)%2){let e=c.slice(1,-1);return{type:`em`,raw:c,text:e,tokens:this.lexer.inlineTokens(e)}}let l=c.slice(2,-2);return{type:`strong`,raw:c,text:l,tokens:this.lexer.inlineTokens(l)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(this.rules.other.newLineCharGlobal,` `),n=this.rules.other.nonSpaceChar.test(e),r=this.rules.other.startingSpaceChar.test(e)&&this.rules.other.endingSpaceChar.test(e);return n&&r&&(e=e.substring(1,e.length-1)),{type:`codespan`,raw:t[0],text:e}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:`br`,raw:t[0]}}del(e,t,n=``){let r=this.rules.inline.delLDelim.exec(e);if(r&&(!r[1]||!n||this.rules.inline.punctuation.exec(n))){let n=[...r[0]].length-1,i,a,o=n,s=this.rules.inline.delRDelim;for(s.lastIndex=0,t=t.slice(-1*e.length+n);(r=s.exec(t))!==null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i||(a=[...i].length,a!==n))continue;if(r[3]||r[4]){o+=a;continue}if(o-=a,o>0)continue;a=Math.min(a,a+o);let t=[...r[0]][0].length,s=e.slice(0,n+r.index+t+a),c=s.slice(n,-n);return{type:`del`,raw:s,text:c,tokens:this.lexer.inlineTokens(c)}}}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let e,n;return t[2]===`@`?(e=t[1],n=`mailto:`+e):(e=t[1],n=e),{type:`link`,raw:t[0],text:e,href:n,tokens:[{type:`text`,raw:e,text:e}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let e,n;if(t[2]===`@`)e=t[0],n=`mailto:`+e;else{let r;do r=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??``;while(r!==t[0]);e=t[0],n=t[1]===`www.`?`http://`+t[0]:t[0]}return{type:`link`,raw:t[0],text:e,href:n,tokens:[{type:`text`,raw:e,text:e}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let e=this.lexer.state.inRawBlock;return{type:`text`,raw:t[0],text:t[0],escaped:e}}}},K=class e{tokens;options;state;inlineQueue;tokenizer;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||E,this.options.tokenizer=this.options.tokenizer||new G,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let t={other:A,block:V.normal,inline:H.normal};this.options.pedantic?(t.block=V.pedantic,t.inline=H.pedantic):this.options.gfm&&(t.block=V.gfm,this.options.breaks?t.inline=H.breaks:t.inline=H.gfm),this.tokenizer.rules=t}static get rules(){return{block:V,inline:H}}static lex(t,n){return new e(n).lex(t)}static lexInline(t,n){return new e(n).inlineTokens(t)}lex(e){e=e.replace(A.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let e=0;e<this.inlineQueue.length;e++){let t=this.inlineQueue[e];this.inlineTokens(t.src,t.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],n=!1){this.tokenizer.lexer=this,this.options.pedantic&&(e=e.replace(A.tabCharGlobal,`    `).replace(A.spaceLine,``));let r=1/0;for(;e;){if(e.length<r)r=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}let i;if(this.options.extensions?.block?.some(n=>(i=n.call({lexer:this},e,t))?(e=e.substring(i.raw.length),t.push(i),!0):!1))continue;if(i=this.tokenizer.space(e)){e=e.substring(i.raw.length);let n=t.at(-1);i.raw.length===1&&n!==void 0?n.raw+=`
`:t.push(i);continue}if(i=this.tokenizer.code(e)){e=e.substring(i.raw.length);let n=t.at(-1);n?.type===`paragraph`||n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+i.raw,n.text+=`
`+i.text,this.inlineQueue.at(-1).src=n.text):t.push(i);continue}if(i=this.tokenizer.fences(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.heading(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.hr(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.blockquote(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.list(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.html(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.def(e)){e=e.substring(i.raw.length);let n=t.at(-1);n?.type===`paragraph`||n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+i.raw,n.text+=`
`+i.raw,this.inlineQueue.at(-1).src=n.text):this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title},t.push(i));continue}if(i=this.tokenizer.table(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.lheading(e)){e=e.substring(i.raw.length),t.push(i);continue}let a=e;if(this.options.extensions?.startBlock){let t=1/0,n=e.slice(1),r;this.options.extensions.startBlock.forEach(e=>{r=e.call({lexer:this},n),typeof r==`number`&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(a=e.substring(0,t+1))}if(this.state.top&&(i=this.tokenizer.paragraph(a))){let r=t.at(-1);n&&r?.type===`paragraph`?(r.raw+=(r.raw.endsWith(`
`)?``:`
`)+i.raw,r.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=r.text):t.push(i),n=a.length!==e.length,e=e.substring(i.raw.length);continue}if(i=this.tokenizer.text(e)){e=e.substring(i.raw.length);let n=t.at(-1);n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+i.raw,n.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=n.text):t.push(i);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){this.tokenizer.lexer=this;let n=e,r=null;if(this.tokens.links){let e=Object.keys(this.tokens.links);if(e.length>0)for(;(r=this.tokenizer.rules.inline.reflinkSearch.exec(n))!==null;)e.includes(r[0].slice(r[0].lastIndexOf(`[`)+1,-1))&&(n=n.slice(0,r.index)+`[`+`a`.repeat(r[0].length-2)+`]`+n.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(r=this.tokenizer.rules.inline.anyPunctuation.exec(n))!==null;)n=n.slice(0,r.index)+`++`+n.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let i;for(;(r=this.tokenizer.rules.inline.blockSkip.exec(n))!==null;)i=r[2]?r[2].length:0,n=n.slice(0,r.index+i)+`[`+`a`.repeat(r[0].length-i-2)+`]`+n.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);n=this.options.hooks?.emStrongMask?.call({lexer:this},n)??n;let a=!1,o=``,s=1/0;for(;e;){if(e.length<s)s=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}a||(o=``),a=!1;let r;if(this.options.extensions?.inline?.some(n=>(r=n.call({lexer:this},e,t))?(e=e.substring(r.raw.length),t.push(r),!0):!1))continue;if(r=this.tokenizer.escape(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.tag(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.link(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(r.raw.length);let n=t.at(-1);r.type===`text`&&n?.type===`text`?(n.raw+=r.raw,n.text+=r.text):t.push(r);continue}if(r=this.tokenizer.emStrong(e,n,o)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.codespan(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.br(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.del(e,n,o)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.autolink(e)){e=e.substring(r.raw.length),t.push(r);continue}if(!this.state.inLink&&(r=this.tokenizer.url(e))){e=e.substring(r.raw.length),t.push(r);continue}let i=e;if(this.options.extensions?.startInline){let t=1/0,n=e.slice(1),r;this.options.extensions.startInline.forEach(e=>{r=e.call({lexer:this},n),typeof r==`number`&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(i=e.substring(0,t+1))}if(r=this.tokenizer.inlineText(i)){e=e.substring(r.raw.length),r.raw.slice(-1)!==`_`&&(o=r.raw.slice(-1)),a=!0;let n=t.at(-1);n?.type===`text`?(n.raw+=r.raw,n.text+=r.text):t.push(r);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return t}infiniteLoopError(e){let t=`Infinite loop on byte: `+e;if(this.options.silent)console.error(t);else throw Error(t)}},q=class{options;parser;constructor(e){this.options=e||E}space(e){return``}code({text:e,lang:t,escaped:n}){let r=(t||``).match(A.notSpaceStart)?.[0],i=e.replace(A.endingNewline,``)+`
`;return r?`<pre><code class="language-`+U(r)+`">`+(n?i:U(i,!0))+`</code></pre>
`:`<pre><code>`+(n?i:U(i,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}def(e){return``}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){let t=e.ordered,n=e.start,r=``;for(let t=0;t<e.items.length;t++){let n=e.items[t];r+=this.listitem(n)}let i=t?`ol`:`ul`,a=t&&n!==1?` start="`+n+`"`:``;return`<`+i+a+`>
`+r+`</`+i+`>
`}listitem(e){return`<li>${this.parser.parse(e.tokens)}</li>
`}checkbox({checked:e}){return`<input `+(e?`checked="" `:``)+`disabled="" type="checkbox"> `}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t=``,n=``;for(let t=0;t<e.header.length;t++)n+=this.tablecell(e.header[t]);t+=this.tablerow({text:n});let r=``;for(let t=0;t<e.rows.length;t++){let i=e.rows[t];n=``;for(let e=0;e<i.length;e++)n+=this.tablecell(i[e]);r+=this.tablerow({text:n})}return r&&=`<tbody>${r}</tbody>`,`<table>
<thead>
`+t+`</thead>
`+r+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){let t=this.parser.parseInline(e.tokens),n=e.header?`th`:`td`;return(e.align?`<${n} align="${e.align}">`:`<${n}>`)+t+`</${n}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${U(e,!0)}</code>`}br(e){return`<br>`}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:n}){let r=this.parser.parseInline(n),i=ct(e);if(i===null)return r;e=i;let a=`<a href="`+e+`"`;return t&&(a+=` title="`+U(t)+`"`),a+=`>`+r+`</a>`,a}image({href:e,title:t,text:n,tokens:r}){r&&(n=this.parser.parseInline(r,this.parser.textRenderer));let i=ct(e);if(i===null)return U(n);e=i;let a=`<img src="${e}" alt="${U(n)}"`;return t&&(a+=` title="${U(t)}"`),a+=`>`,a}text(e){return`tokens`in e&&e.tokens?this.parser.parseInline(e.tokens):`escaped`in e&&e.escaped?e.text:U(e.text)}},ht=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return``+e}image({text:e}){return``+e}br(){return``}checkbox({raw:e}){return e}},J=class e{options;renderer;textRenderer;constructor(e){this.options=e||E,this.options.renderer=this.options.renderer||new q,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new ht}static parse(t,n){return new e(n).parse(t)}static parseInline(t,n){return new e(n).parseInline(t)}parse(e){this.renderer.parser=this;let t=``;for(let n=0;n<e.length;n++){let r=e[n];if(this.options.extensions?.renderers?.[r.type]){let e=r,n=this.options.extensions.renderers[e.type].call({parser:this},e);if(n!==!1||![`space`,`hr`,`heading`,`code`,`table`,`blockquote`,`list`,`html`,`def`,`paragraph`,`text`].includes(e.type)){t+=n||``;continue}}let i=r;switch(i.type){case`space`:t+=this.renderer.space(i);break;case`hr`:t+=this.renderer.hr(i);break;case`heading`:t+=this.renderer.heading(i);break;case`code`:t+=this.renderer.code(i);break;case`table`:t+=this.renderer.table(i);break;case`blockquote`:t+=this.renderer.blockquote(i);break;case`list`:t+=this.renderer.list(i);break;case`checkbox`:t+=this.renderer.checkbox(i);break;case`html`:t+=this.renderer.html(i);break;case`def`:t+=this.renderer.def(i);break;case`paragraph`:t+=this.renderer.paragraph(i);break;case`text`:t+=this.renderer.text(i);break;default:{let e=`Token with "`+i.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return t}parseInline(e,t=this.renderer){this.renderer.parser=this;let n=``;for(let r=0;r<e.length;r++){let i=e[r];if(this.options.extensions?.renderers?.[i.type]){let e=this.options.extensions.renderers[i.type].call({parser:this},i);if(e!==!1||![`escape`,`html`,`link`,`image`,`strong`,`em`,`codespan`,`br`,`del`,`text`].includes(i.type)){n+=e||``;continue}}let a=i;switch(a.type){case`escape`:n+=t.text(a);break;case`html`:n+=t.html(a);break;case`link`:n+=t.link(a);break;case`image`:n+=t.image(a);break;case`checkbox`:n+=t.checkbox(a);break;case`strong`:n+=t.strong(a);break;case`em`:n+=t.em(a);break;case`codespan`:n+=t.codespan(a);break;case`br`:n+=t.br(a);break;case`del`:n+=t.del(a);break;case`text`:n+=t.text(a);break;default:{let e=`Token with "`+a.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return n}},Y=class{options;block;constructor(e){this.options=e||E}static passThroughHooks=new Set([`preprocess`,`postprocess`,`processAllTokens`,`emStrongMask`]);static passThroughHooksRespectAsync=new Set([`preprocess`,`postprocess`,`processAllTokens`]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}emStrongMask(e){return e}provideLexer(e=this.block){return e?K.lex:K.lexInline}provideParser(e=this.block){return e?J.parse:J.parseInline}},gt=class{defaults=T();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=J;Renderer=q;TextRenderer=ht;Lexer=K;Tokenizer=G;Hooks=Y;constructor(...e){this.use(...e)}walkTokens(e,t){let n=[];for(let r of e)switch(n=n.concat(t.call(this,r)),r.type){case`table`:{let e=r;for(let r of e.header)n=n.concat(this.walkTokens(r.tokens,t));for(let r of e.rows)for(let e of r)n=n.concat(this.walkTokens(e.tokens,t));break}case`list`:{let e=r;n=n.concat(this.walkTokens(e.items,t));break}default:{let e=r;this.defaults.extensions?.childTokens?.[e.type]?this.defaults.extensions.childTokens[e.type].forEach(r=>{let i=e[r].flat(1/0);n=n.concat(this.walkTokens(i,t))}):e.tokens&&(n=n.concat(this.walkTokens(e.tokens,t)))}}return n}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(e=>{let n={...e};if(n.async=this.defaults.async||n.async||!1,e.extensions&&(e.extensions.forEach(e=>{if(!e.name)throw Error(`extension name required`);if(`renderer`in e){let n=t.renderers[e.name];n?t.renderers[e.name]=function(...t){let r=e.renderer.apply(this,t);return r===!1&&(r=n.apply(this,t)),r}:t.renderers[e.name]=e.renderer}if(`tokenizer`in e){if(!e.level||e.level!==`block`&&e.level!==`inline`)throw Error(`extension level must be 'block' or 'inline'`);let n=t[e.level];n?n.unshift(e.tokenizer):t[e.level]=[e.tokenizer],e.start&&(e.level===`block`?t.startBlock?t.startBlock.push(e.start):t.startBlock=[e.start]:e.level===`inline`&&(t.startInline?t.startInline.push(e.start):t.startInline=[e.start]))}`childTokens`in e&&e.childTokens&&(t.childTokens[e.name]=e.childTokens)}),n.extensions=t),e.renderer){let t=this.defaults.renderer||new q(this.defaults);for(let n in e.renderer){if(!(n in t))throw Error(`renderer '${n}' does not exist`);if([`options`,`parser`].includes(n))continue;let r=n,i=e.renderer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n||``}}n.renderer=t}if(e.tokenizer){let t=this.defaults.tokenizer||new G(this.defaults);for(let n in e.tokenizer){if(!(n in t))throw Error(`tokenizer '${n}' does not exist`);if([`options`,`rules`,`lexer`].includes(n))continue;let r=n,i=e.tokenizer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.tokenizer=t}if(e.hooks){let t=this.defaults.hooks||new Y;for(let n in e.hooks){if(!(n in t))throw Error(`hook '${n}' does not exist`);if([`options`,`block`].includes(n))continue;let r=n,i=e.hooks[r],a=t[r];Y.passThroughHooks.has(n)?t[r]=e=>{if(this.defaults.async&&Y.passThroughHooksRespectAsync.has(n))return(async()=>{let n=await i.call(t,e);return a.call(t,n)})();let r=i.call(t,e);return a.call(t,r)}:t[r]=(...e)=>{if(this.defaults.async)return(async()=>{let n=await i.apply(t,e);return n===!1&&(n=await a.apply(t,e)),n})();let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.hooks=t}if(e.walkTokens){let t=this.defaults.walkTokens,r=e.walkTokens;n.walkTokens=function(e){let n=[];return n.push(r.call(this,e)),t&&(n=n.concat(t.call(this,e))),n}}this.defaults={...this.defaults,...n}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return K.lex(e,t??this.defaults)}parser(e,t){return J.parse(e,t??this.defaults)}parseMarkdown(e){return(t,n)=>{let r={...n},i={...this.defaults,...r},a=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&r.async===!1)return a(Error(`marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise.`));if(typeof t>`u`||t===null)return a(Error(`marked(): input parameter is undefined or null`));if(typeof t!=`string`)return a(Error(`marked(): input parameter is of type `+Object.prototype.toString.call(t)+`, string expected`));if(i.hooks&&(i.hooks.options=i,i.hooks.block=e),i.async)return(async()=>{let n=i.hooks?await i.hooks.preprocess(t):t,r=await(i.hooks?await i.hooks.provideLexer(e):e?K.lex:K.lexInline)(n,i),a=i.hooks?await i.hooks.processAllTokens(r):r;i.walkTokens&&await Promise.all(this.walkTokens(a,i.walkTokens));let o=await(i.hooks?await i.hooks.provideParser(e):e?J.parse:J.parseInline)(a,i);return i.hooks?await i.hooks.postprocess(o):o})().catch(a);try{i.hooks&&(t=i.hooks.preprocess(t));let n=(i.hooks?i.hooks.provideLexer(e):e?K.lex:K.lexInline)(t,i);i.hooks&&(n=i.hooks.processAllTokens(n)),i.walkTokens&&this.walkTokens(n,i.walkTokens);let r=(i.hooks?i.hooks.provideParser(e):e?J.parse:J.parseInline)(n,i);return i.hooks&&(r=i.hooks.postprocess(r)),r}catch(e){return a(e)}}}onError(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let e=`<p>An error occurred:</p><pre>`+U(n.message+``,!0)+`</pre>`;return t?Promise.resolve(e):e}if(t)return Promise.reject(n);throw n}}},X=new gt;function Z(e,t){return X.parse(e,t)}Z.options=Z.setOptions=function(e){return X.setOptions(e),Z.defaults=X.defaults,de(Z.defaults),Z},Z.getDefaults=T,Z.defaults=E,Z.use=function(...e){return X.use(...e),Z.defaults=X.defaults,de(Z.defaults),Z},Z.walkTokens=function(e,t){return X.walkTokens(e,t)},Z.parseInline=X.parseInline,Z.Parser=J,Z.parser=J.parse,Z.Renderer=q,Z.TextRenderer=ht,Z.Lexer=K,Z.lexer=K.lex,Z.Tokenizer=G,Z.Hooks=Y,Z.parse=Z,Z.options,Z.setOptions,Z.use,Z.walkTokens,Z.parseInline,J.parse,K.lex;var _t=new gt({breaks:!0,gfm:!0});function Q(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`)}function $(e){return Q(e).replace(/`/g,`&#96;`)}function vt(e){return e.replace(/<[^>]*>/g,``)}function yt(e){let t=e.trim();return/^(javascript|vbscript|data):/i.test(t)?`#`:t}function bt(e){return/^(https?:)?\/\//i.test(e)}var xt=new Set(`a.abbr.b.br.caption.code.col.colgroup.del.details.div.em.figcaption.figure.hr.i.img.ins.kbd.li.mark.ol.p.pre.s.span.strong.sub.summary.sup.table.tbody.td.tfoot.th.thead.tr.u.ul`.split(`.`)),St=new Set([`br`,`col`,`hr`,`img`]);function Ct(e){return e.match(/^<\/?\s*([a-z][a-z0-9-]*)\b/i)?.[1].toLowerCase()??null}function wt(e){return[...e.matchAll(/<\/?\s*([a-z][a-z0-9-]*)\b/gi)].every(e=>xt.has(e[1].toLowerCase()))}function Tt(e){return e.replace(/<\s*(script|style|iframe|object|embed|link|meta)\b[\s\S]*?<\s*\/\s*\1\s*>/gi,``).replace(/<\s*(script|style|iframe|object|embed|link|meta)\b[^>]*\/?>/gi,``).replace(/\s+on[a-z]+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+)/gi,``).replace(/\s+(href|src)\s*=\s*(["']?)(javascript:|vbscript:|data:text\/html)[^"'\s>]*/gi,` $1="#"`)}function Et(e){let t=Ct(e);if(!t||!xt.has(t)||!wt(e))return`<code class="inline-code">${Q(e)}</code>`;let n=Tt(e);return St.has(t)||!/^\s*</.test(e)||/^<\/?\s*(a|abbr|b|br|code|del|em|i|img|ins|kbd|mark|s|span|strong|sub|sup|u)\b/i.test(e)?n:`${n}\n`}function Dt(e){return e.normalize(`NFKD`).toLowerCase().trim().replace(/[\u0300-\u036f]/g,``).replace(/[^\p{L}\p{N}\s_-]+/gu,``).replace(/[\s_]+/g,`-`).replace(/-+/g,`-`).replace(/^-|-$/g,``)}function Ot(){let e=new Map;return t=>{let n=Dt(t)||`section`,r=e.get(n)??0;return e.set(n,r+1),r===0?n:`${n}-${r}`}}function kt(e){return e?e.map(e=>`tokens`in e&&Array.isArray(e.tokens)?kt(e.tokens):`text`in e&&typeof e.text==`string`?e.type===`html`?vt(e.text):e.text:``).join(``).trim():``}function At(e,t){for(let n of e)if(t(n),`tokens`in n&&Array.isArray(n.tokens)&&At(n.tokens,t),n.type===`list`)for(let e of n.items)At(e.tokens,t)}function jt(e){let t=Ot();return new gt({breaks:!0,gfm:!0,renderer:{heading({tokens:e,depth:n}){let r=kt(e),i=t(r),a=this.parser.parseInline(e);return`<h${n} id="${$(i)}" class="md-heading md-heading-${n}"><a class="md-heading-anchor" href="#${$(i)}" aria-label="定位到 ${$(r)}"></a>${a}</h${n}>\n`},code({text:e,lang:t}){let n=t?.trim().split(/\s+/)[0]??``;return`<pre class="code-block md-fences"${n?` lang="${$(n)}" data-lang="${$(n)}"`:``}><code class="md-fencescode${n?` language-${$(n)}`:``}">${Q(e)}</code></pre>\n`},html(e){return Et(e.text)},codespan({text:e}){return`<code class="inline-code">${Q(e)}</code>`},blockquote({tokens:e}){return`<blockquote class="md-blockquote">\n${this.parser.parse(e)}</blockquote>\n`},table(e){let t=e.header.map((t,n)=>this.tablecell({...t,align:e.align[n]??null,header:!0})).join(``),n=e.rows.map(t=>`<tr>\n${t.map((t,n)=>this.tablecell({...t,align:e.align[n]??null,header:!1})).join(``)}</tr>\n`).join(``);return`<div class="table-wrapper"><table>\n<thead>\n<tr>\n${t}</tr>\n</thead>\n${n?`<tbody>\n${n}</tbody>\n`:``}</table></div>\n`},tablecell(e){let t=e.header?`th`:`td`;return`<${t}${e.align?` style="text-align: ${e.align}"`:``}>${this.parser.parseInline(e.tokens)}</${t}>\n`},link({href:e,title:t,tokens:n}){let r=yt(e),i=t?` title="${$(t)}"`:``,a=bt(r)?` target="_blank" rel="noopener noreferrer"`:``;return`<a href="${$(r)}"${i}${a}>${this.parser.parseInline(n)}</a>`},image({href:e,title:t,text:n}){let r=yt(e),i=t?` title="${$(t)}"`:``;return`<img src="${$(r)}" alt="${$(n)}"${i} loading="lazy" decoding="async">`}}}).parse(e,{async:!1})}function Mt(e){let t=[],n=Ot();return At(_t.lexer(e),e=>{if(e.type===`heading`&&e.depth<=4){let r=kt(e.tokens)||e.text;t.push({id:n(r),text:r,level:e.depth})}}),t}var Nt=v(o({__name:`MarkdownRenderer`,props:{content:{}},setup(e,{expose:t}){let n=e,r=f(),i=g(()=>jt(n.content)),{selectedThemeId:o,headingNumbersEnabled:s}=ue(),c=null,l=null,u=null;function d(){r.value&&(c??=r.value.attachShadow({mode:`open`}),l||(l=document.createElement(`style`),c.append(l)),u||(u=document.createElement(`article`),u.id=`write`,c.append(u)))}function p(){d(),!(!l||!u)&&(l.textContent=w(o.value),u.dataset.markdownTheme=o.value,u.dataset.headingNumbers=String(s.value))}function h(){d(),u&&(u.innerHTML=i.value,requestAnimationFrame(y))}function v(e){let t=c?.getElementById(e);t&&(t.scrollIntoView({behavior:`smooth`,block:`start`}),history.replaceState(null,``,`#${encodeURIComponent(e)}`))}function y(){let e=decodeURIComponent(location.hash.slice(1));e&&c?.getElementById(e)?.scrollIntoView({block:`start`})}return a(r,()=>{p(),h()},{immediate:!0,flush:`post`}),a(o,p),a(s,p),a(i,h),te(()=>window.addEventListener(`hashchange`,y)),ee(()=>window.removeEventListener(`hashchange`,y)),t({scrollToHeading:v}),(e,t)=>(_(),m(`div`,{ref_key:`host`,ref:r,class:`markdown-renderer-host`},null,512))}}),[[`__scopeId`,`data-v-e40f1292`]]),Pt=[`aria-expanded`],Ft={class:`trigger-preview`,"aria-hidden":`true`},It={class:`trigger-copy`},Lt={key:0,class:`theme-popover`,role:`dialog`,"aria-label":`选择正文主题`},Rt={class:`popover-heading`},zt={class:`reader-setting`},Bt=[`aria-checked`,`title`],Vt={class:`group-label`},Ht={class:`theme-grid`},Ut=[`onClick`],Wt={class:`option-copy`},Gt={key:0,class:`option-check`,"aria-hidden":`true`},Kt=v(o({__name:`MarkdownThemePicker`,setup(a){let o=f(),c=f(!1),{markdownThemes:v,selectedTheme:y,selectedThemeId:ne,headingNumbersEnabled:b,setMarkdownTheme:x,toggleHeadingNumbers:re}=ue(),ie=g(()=>[`light`,`dark`].map(e=>({mode:e,themes:v.filter(t=>t.mode===e)})));function S(e){x(e),c.value=!1}function C(e){o.value?.contains(e.target)||(c.value=!1)}function w(e){e.key===`Escape`&&(c.value=!1)}return te(()=>{document.addEventListener(`pointerdown`,C),document.addEventListener(`keydown`,w)}),ee(()=>{document.removeEventListener(`pointerdown`,C),document.removeEventListener(`keydown`,w)}),(a,f)=>(_(),m(`div`,{ref_key:`pickerRoot`,ref:o,class:`theme-picker`},[l(`button`,{class:`theme-trigger`,type:`button`,"aria-expanded":c.value,"aria-haspopup":`dialog`,onClick:f[0]||=e=>c.value=!c.value},[l(`span`,Ft,[(_(!0),m(p,null,i(e(y).colors,e=>(_(),m(`span`,{key:e,style:n({backgroundColor:e})},null,4))),128))]),l(`span`,It,[f[3]||=l(`small`,null,`正文主题`,-1),l(`strong`,null,r(e(y).name),1)]),f[4]||=l(`span`,{class:`trigger-chevron`,"aria-hidden":`true`},`⌄`,-1)],8,Pt),u(s,{name:`theme-popover`},{default:t(()=>[c.value?(_(),m(`div`,Lt,[l(`div`,Rt,[f[5]||=l(`div`,null,[l(`strong`,null,`阅读外观`),l(`span`,null,`仅改变 Markdown 正文`)],-1),l(`button`,{type:`button`,class:`close-button`,title:`关闭`,onClick:f[1]||=e=>c.value=!1},`×`)]),l(`div`,zt,[f[7]||=l(`span`,{class:`setting-copy`},[l(`strong`,null,`标题编号`),l(`small`,null,`为正文标题显示 1、1.1 等层级编号`)],-1),l(`button`,{type:`button`,class:`setting-switch`,role:`switch`,"aria-checked":e(b),title:e(b)?`关闭标题编号`:`开启标题编号`,onClick:f[2]||=(...t)=>e(re)&&e(re)(...t)},[...f[6]||=[l(`span`,null,null,-1)]],8,Bt)]),(_(!0),m(p,null,i(ie.value,t=>(_(),m(`div`,{key:t.mode,class:`theme-group`},[l(`div`,Vt,[l(`span`,null,r(t.mode===`light`?`浅色主题`:`深色主题`),1),l(`small`,null,r(t.themes.length),1)]),l(`div`,Ht,[(_(!0),m(p,null,i(t.themes,t=>(_(),m(`button`,{key:t.id,type:`button`,class:d([`theme-option`,{active:e(ne)===t.id}]),onClick:e=>S(t.id)},[l(`span`,{class:`option-preview`,style:n({"--preview-bg":t.colors[2],"--preview-accent":t.colors[0],"--preview-secondary":t.colors[1]}),"aria-hidden":`true`},[...f[8]||=[l(`span`,null,null,-1),l(`span`,null,null,-1),l(`span`,null,null,-1)]],4),l(`span`,Wt,[l(`strong`,null,r(t.name),1),l(`small`,null,r(t.description),1)]),e(ne)===t.id?(_(),m(`span`,Gt,`✓`)):h(``,!0)],10,Ut))),128))])]))),128))])):h(``,!0)]),_:1})],512))}}),[[`__scopeId`,`data-v-1869f8a5`]]),qt={class:`post-toc`},Jt={key:0,class:`toc-empty`},Yt={class:`toc-list`},Xt=[`href`,`onClick`],Zt=v(o({__name:`PostToc`,props:{items:{}},emits:[`navigate`],setup(e,{emit:t}){let n=t;return(t,a)=>(_(),m(`nav`,qt,[e.items.length===0?(_(),m(`p`,Jt,`暂无大纲`)):h(``,!0),l(`ul`,Yt,[(_(!0),m(p,null,i(e.items,e=>(_(),m(`li`,{key:e.id,class:d([`toc-item`,`toc-level-${e.level}`])},[l(`a`,{href:`#${e.id}`,class:`toc-link`,onClick:c(t=>n(`navigate`,e.id),[`prevent`])},r(e.text),9,Xt)],2))),128))])]))}}),[[`__scopeId`,`data-v-66e2af2f`]]);export{ue as a,Mt as i,Kt as n,Nt as r,Zt as t};