
export const Faq = () => {
    return(
        <div className="faq">
            <div className="faq__block-heading">
                <div className="faq__block-title">Частые вопросы</div>
                <div className="faq__block-heading-shadow"></div>
            </div>
            <div className="faq__content">
                <details className="faq__chapter">
                    <summary className="faq__chapter-question">Легенда</summary>
                    <p className="faq__chapter-answer">Раскрывающийся текст Раскрывающийся текст Раскрывающийся текст</p>
                </details>
                <details className="faq__chapter">
                    <summary className="faq__chapter-question">Легенда</summary>
                    <p className="faq__chapter-answer">Раскрывающийся текст</p>
                </details>
            </div>
        </div>
    )
}