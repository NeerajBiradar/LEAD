import React from 'react';

const NotesSection = () => {

    const downloadNotes = (subject, unit) => {
        const url = `data/FirstYear/${subject}/${unit}.pdf`;
        const handleClick = () => {
            window.open(url, '_blank');
        };
        return handleClick;
    };
    
    
    const notes = {
        'First Year': [
            { title: 'BEEE', image: 'circuit-board.gif', altText: 'Cprogramming', buttonText: 'PDF Notes', Unit1: 'Unit 1', Unit2: 'Unit 2', Unit3: 'Unit 3', Unit4: 'Unit 4', Unit5: 'Unit 5' },
            { title: 'IOT', image: 'robot.gif', altText: 'python', buttonText: 'PDF Notes', Unit1: 'Unit 1', Unit2: 'Unit 2', Unit3: 'Unit 3', Unit4: 'Unit 4', Unit5: 'Unit 5' },
            { title: 'Physics', image: 'physics.gif', altText: 'Physics', buttonText: 'PDF Notes', Unit1: 'Unit 1', Unit2: 'Unit 2', Unit3: 'Unit 3', Unit4: 'Unit 4', Unit5: 'Unit 5' },
            { title: 'Chemistry', image: 'test-tube.gif', altText: 'chemistry', buttonText: 'PDF Notes', Unit1: 'Unit 1', Unit2: 'Unit 2', Unit3: 'Unit 3', Unit4: 'Unit 4', Unit5: 'Unit 5' },
            { title: 'EDA', image: 'lights.gif', altText: 'EDA', buttonText: 'PDF Notes', Unit1: 'Unit 1', Unit2: 'Unit 2', Unit3: 'Unit 3', Unit4: 'Unit 4', Unit5: 'Unit 5' },
            { title: 'Liner Algebra & Calculus', image: 'math.gif', altText: 'LA&C', buttonText: 'PDF Notes', Unit1: 'Unit 1', Unit2: 'Unit 2', Unit3: 'Unit 3', Unit4: 'Unit 4', Unit5: 'Unit 5' },
            { title: 'NMIT', image: 'maths.gif', altText: 'NMIT', buttonText: 'PDF Notes', Unit1: 'Unit 1', Unit2: 'Unit 2', Unit3: 'Unit 3', Unit4: 'Unit 4', Unit5: 'Unit 5' },
            { title: 'PPS', image: 'coding.gif', altText: 'ESE', buttonText: 'PDF Notes', Unit1: 'Unit 1', Unit2: 'Unit 2', Unit3: 'Unit 3', Unit4: 'Unit 4', Unit5: 'Unit 5' },
            // Add more first year notes here...
        ],
        'Second Year': [
            { title: 'DECO', image: 'deco.gif', altText: 'EDA', buttonText: 'PDF Notes', Unit1: 'Unit 1', Unit2: 'Unit 2', Unit3: 'Unit 3', Unit4: 'Unit 4', Unit5: 'Unit 5' },
            { title: 'JAVA', image: 'document.gif', altText: 'LA&C', buttonText: 'PDF Notes', Unit1: 'Unit 1', Unit2: 'Unit 2', Unit3: 'Unit 3', Unit4: 'Unit 4', Unit5: 'Unit 5' },
            { title: 'Data Structures', image: 'idea.gif', altText: 'NMIT', buttonText: 'PDF Notes', Unit1: 'Unit 1', Unit2: 'Unit 2', Unit3: 'Unit 3', Unit4: 'Unit 4', Unit5: 'Unit 5' },
            { title: 'COSM', image: 'dollar.gif', altText: 'ESE', buttonText: 'PDF Notes', Unit1: 'Unit 1', Unit2: 'Unit 2', Unit3: 'Unit 3', Unit4: 'Unit 4', Unit5: 'Unit 5' },
            { title: 'DM', image: 'student.gif', altText: 'EDA', buttonText: 'PDF Notes', Unit1: 'Unit 1', Unit2: 'Unit 2', Unit3: 'Unit 3', Unit4: 'Unit 4', Unit5: 'Unit 5' },
            { title: 'DBMS', image: 'database.gif', altText: 'LA&C', buttonText: 'PDF Notes', Unit1: 'Unit 1', Unit2: 'Unit 2', Unit3: 'Unit 3', Unit4: 'Unit 4', Unit5: 'Unit 5' },
            { title: 'DS(CODES)', image: 'idea.gif', altText: 'NMIT', buttonText: 'PDF Notes', Unit1: 'Unit 1', Unit2: 'Unit 2', Unit3: 'Unit 3', Unit4: 'Unit 4', Unit5: 'Unit 5' },
            { title: 'JAVA(CODES)', image: 'document.gif', altText: 'ESE', buttonText: 'PDF Notes', Unit1: 'Unit 1', Unit2: 'Unit 2', Unit3: 'Unit 3', Unit4: 'Unit 4', Unit5: 'Unit 5' },
            { title: 'Software Engineering', image: 'se.gif', altText: 'EDA', buttonText: 'PDF Notes', Unit1: 'Unit 1', Unit2: 'Unit 2', Unit3: 'Unit 3', Unit4: 'Unit 4', Unit5: 'Unit 5' },
            { title: 'Thermo Dynamics', image: 'hot.gif', altText: 'LA&C', buttonText: 'PDF Notes', Unit1: 'Unit 1', Unit2: 'Unit 2', Unit3: 'Unit 3', Unit4: 'Unit 4', Unit5: 'Unit 5' },
            { title: 'AD', image: 'aircraft.gif', altText: 'NMIT', buttonText: 'PDF Notes', Unit1: 'Unit 1', Unit2: 'Unit 2', Unit3: 'Unit 3', Unit4: 'Unit 4', Unit5: 'Unit 5' },
            { title: 'Operating System', image: 'globe.gif', altText: 'ESE', buttonText: 'PDF Notes', Unit1: 'Unit 1', Unit2: 'Unit 2', Unit3: 'Unit 3', Unit4: 'Unit 4', Unit5: 'Unit 5' }
            // Add more second year notes here...
        ],
        // Add more years as needed...
    };

    return (
        <section className="notes-section container-fuild" id="notes">
            <div className="mt-4 text-center p-3 border-primary border-2 border-bottom fs-1 text-dark">
                Download notes here
            </div>
            {Object.keys(notes).map((year, index) => (
                <div key={index} className="year-notes my-4 mx-5">
                    <p className="years fs-3">{year} notes</p>
                    <div className="row">
                        {notes[year].map((note, noteIndex) => (
                            <div key={noteIndex} className="col-md-3">
                                <div className="card mb-3">
                                    <img src={`./ImgAndGIF/${note.image}`} className="card-img-top" alt={note.altText} />
                                    <div className="card-body">
                                        <h5 className="card-title">{note.title}</h5>
                                        <p className="card-text">Download notes here</p>
                                        <div className="d-flex flex-wrap gap-2">
                                            <button className="btn btn-primary" onClick={downloadNotes(note.title,"unit1")}>{note.Unit1}</button>
                                            <button className="btn btn-primary" onClick={downloadNotes(note.title,"unit2")}>{note.Unit2}</button>
                                            <button className="btn btn-primary" onClick={downloadNotes(note.title,"unit3")}>{note.Unit3}</button>
                                            <button className="btn btn-primary" onClick={downloadNotes(note.title,"unit4")}>{note.Unit4}</button>
                                            <button className="btn btn-primary" onClick={downloadNotes(note.title,"unit5")}>{note.Unit5}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
}

export default NotesSection;
