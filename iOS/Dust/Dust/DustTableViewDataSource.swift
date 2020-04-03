//
//  DustTableViewControllerDataSource.swift
//  Dust
//
//  Created by jinie on 2020/03/31.
//  Copyright © 2020 jinie. All rights reserved.
//

import UIKit

class DustTableViewDataSource: NSObject, UITableViewDataSource {
    
    let dustInformationManager = DustInformationManager()
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return dustInformationManager.count ?? 0
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let measuredData = dustInformationManager.measuredData()
        let grade = measuredData[indexPath.row].grade
        let colors: [String : UIColor] = ["1": #colorLiteral(red: 0.3058823529, green: 0.4784313725, blue: 0.7803921569, alpha: 1), "2": #colorLiteral(red: 0, green: 0.6392156863, blue: 0.5333333333, alpha: 1), "3": #colorLiteral(red: 1, green: 0.3803921569, blue: 0.2196078431, alpha: 1), "4": #colorLiteral(red: 0.862745098, green: 0.2078431373, blue: 0.1333333333, alpha: 1)]
        let value = measuredData[indexPath.row].value
        let cell = tableView.dequeueReusableCell(withIdentifier: dustTableViewCell, for: indexPath) as! DustTableViewCell
        cell.bar.frame = CGRect(x: 0.0, y: 0.0, width: Double(value) ?? 0.0, height: 20.0)
        cell.bar.backgroundColor = colors[grade]
        cell.label.text = value
        return cell
    }
    
    func request(_ completion: @escaping (DustInformation) -> ()) {
        dustInformationManager.request(completion)
    }
    
}
