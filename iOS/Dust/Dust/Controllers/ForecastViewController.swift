//
//  ForecastViewController.swift
//  Dust
//
//  Created by jinie on 2020/04/03.
//  Copyright © 2020 jinie. All rights reserved.
//

import UIKit

class ForecastViewController: UIViewController {
    
    @IBOutlet weak var imageView: UIImageView!
    @IBOutlet weak var overallTextView: UITextView!
    @IBOutlet weak var gradeTextView: UITextView!
    @IBOutlet weak var playButton: UIButton!
    @IBOutlet weak var progressSlider: UISlider!
    
    private var images: [UIImage] = [UIImage(named: "image1")!, UIImage(named: "image2")!, UIImage(named: "image3")!]
    private var playButtonState: PlayButtonState = .play
    private var timer: Timer!

    override func viewDidLoad() {
        super.viewDidLoad()
        configureImageView()
        requestInform()
        playButton.setImage(UIImage(systemName: "pause.fill"), for: .normal)
    }
    
    func configureImageView() {
        imageView.animationImages = images
        imageView.animationDuration = 3
        imageView.startAnimating()
    }
    
    func requestInform() {
        guard let url = URL(string: "http://dust9.herokuapp.com/information") else { return }
        let request = URLRequest(url: url)
        let session = URLSession(configuration: .default)
        let dataTask = session.dataTask(with: request) { (data, response, error) in
            guard let data = data else { return }
            let decoder = JSONDecoder()
            guard let forecastInform = try? decoder.decode(ForecastInform.self, from: data) else { return }
            DispatchQueue.main.async {
                self.overallTextView.text = forecastInform.informOverall
                self.gradeTextView.text = forecastInform.informGrade
            }
        }
        dataTask.resume()
    }
    
    @IBAction func touchUpPlayButton(_ sender: UIButton) {
        switch playButtonState {
        case .play:
            playButtonState = .pause
            playButton.setImage(UIImage(systemName: "play.fill"), for: .normal)
            imageView.stopAnimating()
        case .pause:
            playButtonState = .play
            playButton.setImage(UIImage(systemName: "pause.fill"), for: .normal)
            imageView.startAnimating()
        }
    }
    
}

enum PlayButtonState {
    case play
    case pause
}
