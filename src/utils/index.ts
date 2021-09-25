const aDom = document.createElement('div');
const canUseNativeScrollAnimation = 'scrollIntoView' in aDom ? true : false

export function goTo(domIdName: string) {

    let offsetTop = 0;


    if(domIdName == '#'){
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        return;
    }
    const targetDom: any = document.getElementById(domIdName);
    if (!targetDom) {
        return;
    }

    try {
        const fixedHeaderDom = document.getElementById('glo-header');
        if (fixedHeaderDom) {
            offsetTop = fixedHeaderDom.offsetHeight;
        }

    } catch (e: any) {
        console.log('Get Fixed Header height error.')
    }
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementPosition = targetDom.getBoundingClientRect().top;
    const offsetPosition = elementPosition - bodyRect - offsetTop;

    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });
    // if (canUseNativeScrollAnimation) {
    //     const config = {
    //         behavior: "smooth"
    //     };
    //     if (offsetTop != null && offsetTop > 0) {
    //         config.top = offsetTop;
    //     }
    //     window.document.getElementById(domIdName)?.scrollIntoView(config);
    //     return;
    // }
}
