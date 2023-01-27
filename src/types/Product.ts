

export interface Product {
     images:        Image[];
     onOffer:       boolean;
     offerPrice:    number;
     offerDuration: string;
     rating:        number;
     reviews:       any[];
     _id:           string;
     name:          string;
     price:         number;
     category:      string;
     description:   string;
     __v:           number;
}

export interface Image {
     url: string;
     id:  string;
}

