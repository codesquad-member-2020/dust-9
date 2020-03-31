//
//  DustTableViewControllerDataSource.swift
//  Dust
//
//  Created by jinie on 2020/03/31.
//  Copyright © 2020 jinie. All rights reserved.
//

import UIKit

class DustTableViewDataSource: NSObject, UITableViewDataSource {
    
    private let identifier = "dustTableViewCell"
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return 50
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: identifier, for: indexPath)
        return cell
    }
    
}
