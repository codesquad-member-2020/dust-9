const render = () => {
    return `
    <div class="information">
        <div class="informOverall">
        </div>
        <div class="informGrade">
        </div>
    </div>
    `;
}

const renderInformation = (information) => {
    return `
    <p>
        ${information}
    </p>
    `;
}


export default {render, renderInformation}