define("@widget/GALLERY/bs-gallery3-Gallery-c2ef7b97.js",["exports","~/c/bs-dataAids","@wsb/guac-widget-shared@^1/lib/components/Carousel","~/c/bs-CustomArrows","~/c/bs-directionalKeyHandlers","~/c/bs-util","~/c/bs-wrapWithDeviceDetection"],(function(e,t,a,o,l,r,s){"use strict";var n=s.w(class extends(global.React||guac.react).Component{constructor(e){super(e),this.state={arrows:!1,currentSlide:0,nextSlideIncremental:0,mouseOnCarousel:!1},this.handleMouseMove=this.handleMouseMove.bind(this),this.handleMouseLeave=this.handleMouseLeave.bind(this),this.handleMouseEnter=this.handleMouseEnter.bind(this),this.nextSlideDebounced=(global._||guac.lodash).debounce((e=>l.h({keyCode:e.keyCode,context:this})),200),this._loadedImages=new Set}static getDerivedStateFromProps(e,t){const{images:a=[]}=e,{currentSlide:o}=t;return o>=a.length?{currentSlide:0}:null}handleMouseLeave(){this.setState({mouseOnCarousel:!1,arrows:!1})}handleMouseEnter(){this.setState({mouseOnCarousel:!0}),this.handleMouseMove()}handleMouseMove(){this.state.arrows||this.setState({arrows:!0}),clearTimeout(this.timer),this.timer=setTimeout((()=>{this.setState({arrows:!1})}),2e3)}handleSlideChange(e){this.setState({currentSlide:e})}static get propTypes(){return{autoplay:(global.PropTypes||guac["prop-types"]).bool,category:(global.PropTypes||guac["prop-types"]).string,className:(global.PropTypes||guac["prop-types"]).string,device:(global.PropTypes||guac["prop-types"]).string,images:(global.PropTypes||guac["prop-types"]).array,renderAsThumbnail:(global.PropTypes||guac["prop-types"]).bool,section:(global.PropTypes||guac["prop-types"]).string,showthumbnailsThirdLayout:(global.PropTypes||guac["prop-types"]).bool,size:(global.PropTypes||guac["prop-types"]).string,currentImageSelected:(global.PropTypes||guac["prop-types"]).string,autoplayDelay:(global.PropTypes||guac["prop-types"]).string,showSlideNum:(global.PropTypes||guac["prop-types"]).bool,fullBleed:(global.PropTypes||guac["prop-types"]).bool,transitionType:(global.PropTypes||guac["prop-types"]).string,showArrows:(global.PropTypes||guac["prop-types"]).bool}}static get defaultProps(){return{category:"neutral",images:[]}}render(){const{device:e,showthumbnailsThirdLayout:t,fullBleed:a,images:s,showArrows:n,transitionType:i}=this.props,{nextSlideIncremental:c,arrows:g}=this.state,u=(global.Core||guac["@wsb/guac-widget-core"]).UX2.Component.Grid,d=this.renderImages(),p="mobile"===e,h="fade"===i&&p,m=s.length>1&&(n||h)?[{component:o.C,props:{visible:g||h,triggerNextSlide:c},position:"bottom"}]:[];if(t&&s.length>1){const{width:e,height:t}=l.s,o=s.map((a=>{let{imageData:o}=a;return{url:r.g((global.Core||guac["@wsb/guac-widget-core"]).utils.generateBackgroundUrl(o),e,t,"background"),caption:o.caption,alt:o.alt}})),n={position:"absolute",width:"100%",left:"50%",transform:"translateX(-50%)"};p||m.push({component:l.T,props:{images:o,overrideStyle:n,thumbWidth:95,thumbHeight:t,renderContainer:a},position:"bottom"})}const b=p&&!h?{imageComponents:d}:{imageComponents:d,controls:m},y=d.length>0&&(global.React||guac.react).createElement((global.Core||guac["@wsb/guac-widget-core"]).UX2.Group.Carousel,{onMouseMove:this.handleMouseMove,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave,"data-route":"",children:this.renderCarouselComponents(b,p)});return y&&(a?y:(global.React||guac.react).createElement((global.Core||guac["@wsb/guac-widget-core"]).UX2.Element.Container,null,(global.React||guac.react).createElement(u,{size:1,bottom:!1},y)))}componentDidUpdate(e){const{currentImageSelected:t}=this.props;t!==e.currentImageSelected&&t>-1&&this.setState({currentSlide:parseInt(t,10)})}componentWillUnmount(){l.m(this.nextSlideDebounced)}renderCaptionOverlay(e){const{images:a,showSlideNum:o,fullBleed:l}=this.props,{currentSlide:r}=this.state,s=`${a.length>10&&r+1<10?0:""}${r+1}/${a.length}`,n=o&&a.length>1,i={overlayStyle:{zIndex:1},fullBleedBlockStyle:{width:"100%",paddingHorizontal:"0px !important"},containerStyle:{display:"flex",alignItems:"center",justifyContent:"flex-end"},captionStyle:{flexGrow:"1 !important",textAlign:n?"left":"center"},slideNumStyle:{flexGrow:0}};if(!e&&!n)return null;const c=(global.React||guac.react).createElement((global.React||guac.react).Fragment,null,e&&(global.React||guac.react).createElement((global.Core||guac["@wsb/guac-widget-core"]).UX2.Element.Text,{"data-aid":t.d.GALLERY_CAPTION_RENDERED,children:e,style:i.captionStyle,richtext:!0}),n&&(global.React||guac.react).createElement((global.Core||guac["@wsb/guac-widget-core"]).UX2.Element.Text,{"data-aid":t.d.GALLERY_SLIDE_POSITION,children:s,style:i.slideNumStyle}));return l?(global.React||guac.react).createElement((global.Core||guac["@wsb/guac-widget-core"]).UX2.Element.FigCaption.Overlay,{style:i.overlayStyle},(global.React||guac.react).createElement((global.Core||guac["@wsb/guac-widget-core"]).UX2.Element.Block,{style:i.fullBleedBlockStyle},(global.React||guac.react).createElement((global.Core||guac["@wsb/guac-widget-core"]).UX2.Element.Container,{style:i.containerStyle},c))):(global.React||guac.react).createElement((global.Core||guac["@wsb/guac-widget-core"]).UX2.Element.FigCaption.Overlay,{style:i.overlayStyle},c)}renderCarouselComponents(e,o){const{imageComponents:r,controls:s}=e,{autoplay:n,autoplayDelay:i,renderAsThumbnail:c,images:g,showthumbnailsThirdLayout:u,device:d,size:p,currentImageSelected:h,transitionType:m,fullBleed:b}=this.props,{currentSlide:y}=this.state,w=h>-1?parseInt(h,10):y,S={initialSlide:parseInt(w,10)},C=g[y].caption||"",E=c&&("mobile"===d||"xs"===p),v=1e3*(parseFloat(i)||3.5),f=this.renderCaptionOverlay(C),T={paddingBottom:"56.25%"};"fade"!==m&&(T.opacity=1,T.position="relative");const M=c?r[0]:(global.React||guac.react).createElement(a.default,t._({key:h,slideWidth:"100%",arrows:!1,autoplay:n,autoplaySpeed:v,dots:!1,draggable:g.length>1,afterChange:this.handleSlideChange.bind(this),controls:s||[],children:r,transition:m,pauseOnHover:!b,style:{slide:T,viewport:{paddingBottom:"fade"===m?"56.25%":0},track:{lineHeight:0}}},S));let x,I;return c&&(x={height:650,width:900,marginLeft:"auto",marginRight:"auto"}),!u||o&&!c||(I="xxlarger"),(global.React||guac.react).createElement((global.Core||guac["@wsb/guac-widget-core"]).UX2.Element.Block,{style:{...x,marginBottom:I,position:"relative"}},M,f,E&&u&&(global.React||guac.react).createElement(l.F,{images:g,thumbImageDimensions:l.s,imageType:"background",baseStyle:{position:"absolute",bottom:-80,overflow:"hidden",width:"100%"}}))}renderImages(){const{images:e}=this.props,{currentSlide:a}=this.state,o=new Set([a-1<0?e.length-1:a-1,a,a+1===e.length?0:a+1]);return e.map(((e,a)=>{const{imageData:r={},caption:s,position:n="center"}=e,{src:i}=r;return Boolean(o.has(a)||this._loadedImages.has(i))?(this._loadedImages.add(i),(global.React||guac.react).createElement((global.Core||guac["@wsb/guac-widget-core"]).UX2.Component.Background,t._({key:a,imageData:r,"data-route":"","data-aid":t.a(a),alt:s||"",style:{top:0,left:0,position:"absolute !important",overflow:"hidden",marginBottom:0,height:"100%",width:"100%",backgroundPosition:n},onMouseEnter:l.m.bind(this,this.nextSlideDebounced,!0),onMouseLeave:l.m.bind(this,this.nextSlideDebounced)},t.g(a,{isImage:!0,useImageField:!1})))):(global.React||guac.react).createElement("div",{key:a})}))}});e.default=n,Object.defineProperty(e,"__esModule",{value:!0})})),"undefined"!=typeof window&&(window.global=window);
//# sourceMappingURL=bs-gallery3-Gallery-c2ef7b97.js.map
