const navigationData = (function() 
{
    let currentTabIndex = 0;

    return {
        changeCurrentTabIndex(tabIndex) {
            currentTabIndex = tabIndex;
        },
        getCurrentTabIndex() {
            return currentTabIndex;
        }
    };
})(); 

export {navigationData};