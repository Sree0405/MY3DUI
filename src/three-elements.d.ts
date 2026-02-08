import { Object3DNode } from '@react-three/fiber'
import { EffectComposer, RenderPass, UnrealBloomPass } from 'three-stdlib'

declare module '@react-three/fiber' {
    interface ThreeElements {
        effectComposer: Object3DNode<EffectComposer, typeof EffectComposer>
        renderPass: Object3DNode<RenderPass, typeof RenderPass>
        unrealBloomPass: Object3DNode<UnrealBloomPass, typeof UnrealBloomPass>
    }
}
