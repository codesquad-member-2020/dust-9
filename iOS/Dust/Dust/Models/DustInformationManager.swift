//
//  DustInformationManager.swift
//  Dust
//
//  Created by jinie on 2020/04/02.
//  Copyright © 2020 jinie. All rights reserved.
//

import Foundation

class DustInformationManager {
    
    var dustInformation: DustInformation?
    var count: Int?
    
    func request(_ completion: @escaping (DustInformation) -> ()) {
        guard let url = URL(string: "http://dust99.herokuapp.com/location?latitude=37.4624272&longitude=126.97828419999999") else { return }
        let request = URLRequest(url: url)
        let session = URLSession(configuration: .default)
        let dataTask = session.dataTask(with: request) { (data, response, error) in
            guard let data = data else { return }
            let decoder = JSONDecoder()
            guard let responseData = try? decoder.decode(DustInformation.self, from: data) else { return }
            self.dustInformation = responseData
            self.count = self.dustInformation?.measuredData.count ?? nil
            completion(responseData)
        }
        dataTask.resume()
    }
    
    func station() -> String {
        return dustInformation?.station ?? ""
    }
    
    func measuredData() -> [MeasuredData] {
        return dustInformation?.measuredData ?? []
    }
    
}
