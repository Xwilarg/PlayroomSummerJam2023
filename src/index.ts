import { PerspectiveCamera, Scene, WebGLRenderer, DirectionalLight, Color } from "three"
// @ts-ignore
import { onPlayerJoin, insertCoin, myPlayer } from "playroomkit"

// Set up scene and renderer
const scene = new Scene()

scene.background = new Color(49 / 255, 77 / 255, 121 / 255)

const renderer = new WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)

const camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000)
renderer.render(scene, camera)

// Add a light to our scene
const light = new DirectionalLight(0xffffff)

light.position.set(0, 10, 10)
scene.add(light)

// Insert the coin!
insertCoin()