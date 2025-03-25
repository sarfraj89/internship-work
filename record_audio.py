import sounddevice as sd
import soundfile as sf

def record_audio(filename='Recording.wav', duration=5, samplerate=44100):
    try:
        print("Recording...")
        recording = sd.rec(int(duration * samplerate), samplerate=samplerate, channels=2, dtype='float32')
        sd.wait()  # Wait until recording is finished
        sf.write(filename, recording, samplerate)
        print(f"Recording saved as '{filename}'")
    except Exception as e:
        print(f"Error during recording: {e}")

record_audio()
