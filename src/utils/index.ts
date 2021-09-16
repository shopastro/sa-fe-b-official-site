
const aDom = document.createElement('div');
const canUseNativeScrollAnimation = 'scrollIntoView' in aDom ? true : false

export function goTo(domIdName: string) {

    if(canUseNativeScrollAnimation){

        window.document.getElementById(domIdName)?.scrollIntoView({
            behavior: "smooth"
        });
        return;
    }
}
