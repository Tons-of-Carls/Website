
class Base
{
  constructor(props = null)
  {
    if(props){
      this.props = props
    }
    else{
      this.props = {_:1};
    }
  }

  render()
  {
    return``
  }
}
