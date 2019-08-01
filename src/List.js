class List extends Base{
  render(){
    let res = "";

    if (this.props.data && this.props.display){
      for(let i = 0; i < this.props.data.length; i++){
        res += new this.props.display({...this.props.data[i], index: i}).render()
      }
    }
    else{
      console.log("No data for list");
    }
    return res;
  }
}