import '../styles/componentStyles/Section.css'

const Section = (src, head, body, reverse, first) => {
    return `
        <div id=${first? 'features':null} class=${reverse ? 'section-reverse' : 'section'}>
            <div class='section-img'>
                <div>
                    <img src=${src} />
                </div>
            </div>
            <div class='section-content'>
                <h1>${head}</h1>
                <p>${body}</p>
            </div>
        </div>
    `
}

export default Section