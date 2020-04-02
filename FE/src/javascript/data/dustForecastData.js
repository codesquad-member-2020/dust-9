const dustForecastData = (function() 
{
    const minXPosition = 0;
    const maxXPosition = 300;
    let currentXPosition = 0;
    let imageCount = 0;   

    const forecastDataObserver = [];

    return {
        registerObserver(observer) {
            forecastDataObserver.push(observer);
        },
        changeCurrentXPosition: function(position) {
            if (currentXPosition === position)
                return;
    
            let cvtXPosition = position;

            if (cvtXPosition > maxXPosition) {
                cvtXPosition = maxXPosition - 1;
            }
            else if (cvtXPosition < minXPosition) {
                cvtXPosition = minXPosition;
            }

            currentXPosition = cvtXPosition;

            forecastDataObserver.forEach(observer => {
                if (observer.hasOwnProperty("onNotifyCurrentXPositionChanged"))
                    observer.onNotifyCurrentXPositionChanged(currentXPosition);
            });
        },
        changeImageCount: function(count) {
            if (imageCount === count)
                return;
    
            imageCount = count;

            forecastDataObserver.forEach(observer => {
                if (observer.hasOwnProperty("onNotifyImageCountChanged"))
                    observer.onNotifyImageCountChanged(imageCount);
            });
        },
    };
})(); 

export {dustForecastData};