const comment = (props) => {
  const el = document.createElement('li');
  const nameLogo = props.username.split('')[0];
  el.innerHTML = `

    <div class="comment-name">
       <h4>${nameLogo}</h4>
       <span>${props.username}</span>
    </div>

    <p>${props.comment}</p>
    <p class="comment-date">Date :${props.creation_date}</p>
    `;

  return el;
};

export default comment;