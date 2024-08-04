function Menu({ onSelectVideo }) {
    const clickHandler = (event) => {
      const name = event.target.value;
      onSelectVideo(name);
    };
  
    return (
      <form onClick={clickHandler}>
        <label>
          <input type="radio" name="src" value="fast" /> fast
        </label>
        <label>
          <input type="radio" name="src" value="slow" /> slow
        </label>
        <label>
          <input type="radio" name="src" value="cute" /> cute
        </label>
        <label>
          <input type="radio" name="src" value="eek" /> eek
        </label>
      </form>
    );
  }
  
  export default Menu;
  