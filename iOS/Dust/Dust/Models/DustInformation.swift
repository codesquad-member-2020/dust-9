//
//  DustInformation.swift
//  Dust
//
//  Created by jinie on 2020/04/01.
//  Copyright © 2020 jinie. All rights reserved.
//

import Foundation

struct DustInformation: Codable {
    
    let station: String
    let measuredData: [MeasuredData]
    
    enum CodingKeys: String, CodingKey {
        case station = "stationName"
        case measuredData = "dustValues"
    }
    
    init(from decoder: Decoder) throws {
        let values = try decoder.container(keyedBy: CodingKeys.self)
        station = try values.decode(String.self, forKey: .station)
        measuredData = try values.decode([MeasuredData].self, forKey: .measuredData)
    }
    
}

struct MeasuredData: Codable {
    
    let grade: String
    let value: String
    let time: String
    
    enum CodingKeys: String, CodingKey {
        case grade = "pm10Grade"
        case value = "pm10Value"
        case time = "datetime"
    }
    
}
