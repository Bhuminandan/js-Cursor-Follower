const root = document.querySelector('html');

// Creating the cursor element 

const cursor = document.createElement('div');
cursor.classList.add('cursor');
root.appendChild(cursor);


// Creating the follower Element

const follower = document.createElement('div');
follower.classList.add('cursor', 'cursor__follower');
root.appendChild(follower)

// Adding event listner on Moverover

root.addEventListener('mousemove', (e) => {
    setPosition(cursor, e);
    setPosition(follower, e);
})

function setPosition(element, e) {
    element.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`
}