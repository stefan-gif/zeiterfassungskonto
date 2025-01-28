class UrlaubsDaten {
  constructor() {
    this.Urlaubsanspruch = "30";
    this.Urlaubgeplant = "15";
    this.Urlaubgenommen = "1";
    
  }

  update(data) {
    this.Urlaubgenommen = data.Urlaubgenommen;
    this.Urlaubgeplant = data.Urlaubgeplant;
    this.Urlaubsanspruch = data.Urlaubsanspruch;
  }
  resturlaubBerechnen() {
    return this.Urlaubsanspruch - this.Urlaubgenommen;
  }
}

export default UrlaubsDaten;