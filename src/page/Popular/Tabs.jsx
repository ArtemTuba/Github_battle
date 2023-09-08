const Tabs = (props) => {
    const languages = ['All', 'Javascript', 'Ruby', 'Java', 'Css', 'Python'];
    return(
        <>
            <ul className='languages'>
                {languages.map((lang, i) => 
                <li 
                key={i} 
                style={{color: lang === props.selectedLanguage ? '#d0021b' : '#000000'}}
                onClick={() => props.setselectedLanguage(lang)}>
                    {lang}
                </li>)}
            </ul>
        </>
    )
}

export default Tabs;