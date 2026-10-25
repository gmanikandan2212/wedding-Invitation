/**
 * Central Configuration for P. Precilla & G. Michael Wedding Invitation
 * Easy to update names, dates, venues, contact details, and asset paths.
 */

export interface WeddingConfig {
  couple: {
    bride: {
      firstName: string;
      fullName: string;
      qualification: string;
      parents: string;
      residence: string;
    };
    groom: {
      firstName: string;
      fullName: string;
      qualification: string;
      parents: string;
      residence: string;
    };
  };
  verse: {
    text: string;
    reference: string;
  };
  invitationMessage: {
    parentsHeader: string;
    parentsResidence: string;
    invitationBody: string;
  };
  solemnization: {
    intro: string;
    bishopName: string;
    bishopDegrees: string;
    diocese: string;
  };
  ceremony: {
    day: string;
    date: string;
    time: string;
    isoDateTime: string; // ISO 8601 string in Asia/Kolkata timezone
    venueName: string;
    venueAddress: string;
    city: string;
    googleMapsUrl: string;
  };
  reception: {
    header: string;
    venueName: string;
    landmark: string;
    city: string;
    googleMapsUrl: string;
  };
  closingMessage: {
    text: string;
    host: string;
    family: Array<{
      name: string;
      designation: string;
    }>;
  };
  contacts: Array<{
    number: string;
    display: string;
    tel: string;
  }>;
  assets: {
    fullCardImage: string;
    crossEmblem: string;
    flourishDivider: string;
    weddingBells: string;
    coupleNamesScript: string;
    topLeftFloral: string;
    bottomRightFloral: string;
    originalPdfPath: string;
  };
}

export const weddingConfig: WeddingConfig = {
  couple: {
    bride: {
      firstName: "Precilla",
      fullName: "P. Precilla",
      qualification: "M.Sc., (Agri)",
      parents: "Mr. S. Pitchaimuthu (Late) & Mrs. P. Malathi",
      residence: "Chinna Vangalam Palayam",
    },
    groom: {
      firstName: "Michael",
      fullName: "G. Michael",
      qualification: "B.Tech.,",
      parents: "Mr. A. Govindhan (Late) & Mrs. G. Bakhiyam",
      residence: "Karunya Nagar, Coimbatore.",
    },
  },
  verse: {
    text: "“The Lord has made everything beautiful in its time”.",
    reference: "Ecclesiastes 3:11",
  },
  invitationMessage: {
    parentsHeader: "Mr. S. Pitchaimuthu (Late) & Mrs. P. Malathi",
    parentsResidence: "Chinna Vangalam Palayam",
    invitationBody:
      "Cordially invite you with your family on the gracious occasion of the holy matrimony of our beloved daughter",
  },
  solemnization: {
    intro: "Which will be solemnized by",
    bishopName: "Rt. Rev. Dr. S. Samuel Rajadurai",
    bishopDegrees: "M.A., B.D., M.Th., Ph.D.",
    diocese: "The Bishop of Trichy-Tanjore Diocese",
  },
  ceremony: {
    day: "FRIDAY",
    date: "20 NOVEMBER 2026",
    time: "9:30 AM – 10:30 AM",
    // 20th November 2026, 09:30 AM Indian Standard Time (UTC+05:30)
    isoDateTime: "2026-11-20T09:30:00+05:30",
    venueName: "CSI HENRY LITTLE MEMORIAL CHURCH",
    venueAddress: "CSI Henry Little Memorial Church",
    city: "Karur",
    // Verified Google Maps search intent URL for CSI Henry Little Memorial Church, Karur
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=CSI+Henry+Little+Memorial+Church+Karur",
  },
  reception: {
    header: "RECEPTION TO FOLLOW",
    venueName: "ANAR PUNITHAVATHI MAHAL",
    landmark: "New Bus Stand",
    city: "Karur",
    // Verified Google Maps search intent URL for Anar Punithavathi Mahal, Karur
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Anar+Punithavathi+Mahal+New+Bus+Stand+Karur",
  },
  closingMessage: {
    text: "“Eagerly looking for your presence and prayers.”",
    host: "Mrs. P. Malathi",
    family: [
      {
        name: "P. Premalatha, M.Sc., B.Ed.",
        designation: "B.T Assistant, Trichy.",
      },
      {
        name: "P. Indhumathi, M.A., B.Ed.",
        designation: "VAO, Karur Dt.",
      },
    ],
  },
  contacts: [
    {
      number: "9443246729",
      display: "94432 46729",
      tel: "+919443246729",
    },
    {
      number: "8220709063",
      display: "82207 09063",
      tel: "+918220709063",
    },
  ],
  assets: {
    fullCardImage: "/wedding_card_full.png",
    crossEmblem: "/assets/botanical/cross_olive_clean.png",
    flourishDivider: "/assets/extracted/flourish_divider_wide.png",
    weddingBells: "/assets/extracted/wedding_bells_clean.png",
    coupleNamesScript: "/assets/extracted/couple_names_script.png",
    topLeftFloral: "/assets/extracted/top_left_floral_clean.png",
    bottomRightFloral: "/assets/extracted/bottom_right_floral_clean.png",
    originalPdfPath: "/assets/aistudio/Wedding_Invitation_-_Friends_1972c612.pdf",
  },
};
