//
//  DustViewController.swift
//  Dust
//
//  Created by jinie on 2020/03/31.
//  Copyright © 2020 jinie. All rights reserved.
//

import UIKit

class DustViewController: UIViewController {
    
    @IBOutlet weak var gradientView: UIView!
    @IBOutlet weak var emojiLabel: UILabel!
    @IBOutlet weak var statusLabel: UILabel!
    @IBOutlet weak var valueLabel: UILabel!
    @IBOutlet weak var timeLabel: UILabel!
    @IBOutlet weak var stationLabel: UILabel!
    @IBOutlet weak var tableView: UITableView!
    
    private let dustTableViewDataSource = DustTableViewDataSource()
    private let dustTableViewDelegate = DustTableViewDelegate()
    private let dustNib = UINib(nibName: "DustTableViewCell", bundle: nil)
    private var dustMeasuredData: [MeasuredData]!
    
    deinit {
        NotificationCenter.default.removeObserver(self)
    }

    override func viewDidLoad() {
        super.viewDidLoad()
        configureTableView()
        request()
        NotificationCenter.default.addObserver(self,
                                               selector: #selector(dustScrollViewDidScroll(_:)),
                                               name: dustScrollNotificationName,
                                               object: nil)
    }
    
    func configureTableView() {
        tableView.dataSource = dustTableViewDataSource
        tableView.delegate = dustTableViewDelegate
        tableView.register(dustNib, forCellReuseIdentifier: dustTableViewCell)
    }
    
    func request() {
        dustTableViewDataSource.request { responseData in
            DispatchQueue.main.async {
                self.tableView.reloadData()
                self.dustMeasuredData = responseData.measuredData
                self.stationLabel.text = "\(responseData.station) 측정소 기준"
            }
        }
    }
    
    @objc func dustScrollViewDidScroll(_ notification: Notification) {
        guard let userInfo = notification.userInfo else { return }
        let firstVisibleRow = userInfo[dustScrollUserInfoKey]! as! Int
        guard let dustMeasuredData = dustMeasuredData else { return }
        let grade = dustMeasuredData[firstVisibleRow].grade
        let value = dustMeasuredData[firstVisibleRow].value
        let time = dustMeasuredData[firstVisibleRow].time
        configureGradientView(with: grade)
        emojiLabel.text = dustEmoji[grade]!
        statusLabel.text = dustStatus[grade]!
        valueLabel.text = "\(value) 𝜇g/m³"
        timeLabel.text = "오늘 \(time):00"
    }
    
    func configureGradientView(with grade: String) {
        let colors = ["1": [#colorLiteral(red: 0.3058823529, green: 0.4784313725, blue: 0.7803921569, alpha: 1), UIColor.white.cgColor],
                      "2": [#colorLiteral(red: 0, green: 0.6392156863, blue: 0.5333333333, alpha: 1), UIColor.white.cgColor],
                      "3": [#colorLiteral(red: 1, green: 0.3803921569, blue: 0.2196078431, alpha: 1), UIColor.white.cgColor],
                      "4": [#colorLiteral(red: 0.862745098, green: 0.2078431373, blue: 0.1333333333, alpha: 1), UIColor.white.cgColor]]
        let gradient = CAGradientLayer()
        gradient.frame = gradientView.bounds
        gradient.colors = colors[grade]
        gradientView.layer.addSublayer(gradient)
    }
    
}
