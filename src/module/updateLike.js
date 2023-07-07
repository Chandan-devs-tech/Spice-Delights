const updateNumberOfLikes = (idValue, div) => {
  let foodLikes = parseInt(div.textContent, 10);
  foodLikes += 1;
  div.textContent = `${foodLikes} likes`;
};

export default updateNumberOfLikes;