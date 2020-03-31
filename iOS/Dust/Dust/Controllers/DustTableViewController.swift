//
//  DustViewController.swift
//  Dust
//
//  Created by jinie on 2020/03/31.
//  Copyright © 2020 jinie. All rights reserved.
//

import UIKit

class DustTableViewController: UIViewController {
    
    @IBOutlet weak var tableView: UITableView!
    private let dustTableViewDataSource = DustTableViewDataSource()
    private let dustTableViewDelegate = DustTableViewDelegate()
    private let dustNib = UINib(nibName: "DustTableViewCell", bundle: nil)

    override func viewDidLoad() {
        super.viewDidLoad()
        
        tableView.dataSource = dustTableViewDataSource
        tableView.delegate = dustTableViewDelegate
        tableView.register(dustNib, forCellReuseIdentifier: "dustTableViewCell")
        tableView.reloadData()
    }

}
