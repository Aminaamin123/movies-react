import React, { useState, useRef } from 'react';
import Movie from './Movie';

export default function MovieList() {
    const [movies, setMovies] = useState([
    ]);
    const inputTitle = useRef();
    const inputGrade = useRef();

    function addItem(event){
        event.preventDefault();
        if (inputTitle.current.value == 0){
            alert("Skriv in en film titel")
        }
        else if (inputGrade.current.value == 0){
            alert("Välj ett betyg")
        }
        else{
            const newId = movies.length > 0 ? movies[movies.length - 1].id + 1 : 1;

            setMovies([...movies, {
                id: newId,
                grade: inputGrade.current.value,
                title: inputTitle.current.value
            }]);
    
            inputTitle.current.value = "";
            inputGrade.current.value = 0;
        }
    }

    function deleteItem(id){
        console.log(id)
        setMovies(movies.filter((item) => item.id !== id));
    }

    function sortByGrade(){
        movies.sort(grade);
        setMovies([...movies]);
    }
    function grade(movieA, movieB) {
        let gradeA = movieA.grade;
        let gradeB = movieB.grade;
    
        return gradeB - gradeA;
    }
    function sortByTitle(){
        movies.sort(title);
        setMovies([...movies]);
    }
    function title(movieA, movieB) {
        let titleA = movieA.title;
        let titleB = movieB.title;
    
        if (titleA < titleB) {
            return -1;
        } else if (titleA > titleB) {
            return 1;
        } else {
            return 0;
        }
    }
    return (
        <div>
            <legend className="border-bottom">Lägg till en film</legend>
            <form className="border-bottom pb-4">
                <fieldset>
                <div className="mb-3">
                    <label for="title">Titel:</label>
                    <input className="form-control" type="text" id="title" placeholder="Lägg till en ny film.." ref={inputTitle} />
                </div>
                <div className="mb-3">
                <label for="rating">Betyg:</label>
                <select type="text" id="rating" className="form-control" ref={inputGrade}>
                        <option value="0">Välj betyg här...</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <input type="submit" className="btn btn-success mt-3" value="Spara film" onClick={addItem} />
                </fieldset>
            </form>
            <h2>Inlagda filmer</h2>
            <ul className="list-group">
                {movies.map(movie => <Movie key={movie.id} item={movie} deleteItem={deleteItem}/>) }
            </ul> 
            <button className="btn btn-primary mt-3 m-2" onClick={sortByTitle}>Alfabetisk ordning</button>
            <button className="btn btn-primary mt-3 m-2" onClick={sortByGrade}>Betygsordning</button>
        </div>
    )
}
