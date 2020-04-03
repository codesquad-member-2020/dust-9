//
//  ForecastInformation.swift
//  Dust
//
//  Created by jinie on 2020/04/03.
//  Copyright © 2020 jinie. All rights reserved.
//

import Foundation

struct ForecastImages: Codable {
    
    let images: [String]
    
}

struct ForecastInform: Codable {
    
    let informOverall: String
    let informGrade: String
    
}
