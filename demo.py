from pytube import YouTube

video_url = 'https://www.youtube.com/watch?v=elzGrBIlBPQ'
yt = YouTube(video_url)
stream = yt.streams.get_highest_resolution()
stream.download()

print(f'Download completed: {yt.title}')
