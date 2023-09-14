import React from 'react'

const year = new Date().getFullYear();
console.log(year)

function Footer() {
    return (
        <footer>
            <p>copyright &copy; {year}</p>
        </footer>
    )
}

export default Footer