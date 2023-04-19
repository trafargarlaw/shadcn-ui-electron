import * as React from 'react'
import {
  Album,
  CreditCard,
  Globe,
  Keyboard,
  LayoutGrid,
  Library,
  ListMusic,
  LogOut,
  Mail,
  MessageSquare,
  Mic,
  Mic2,
  Music,
  Music2,
  PlayCircle,
  Plus,
  PlusCircle,
  Podcast,
  Radio,
  Settings,
  User,
  UserPlus,
  Users
} from 'lucide-react'

import { cn } from '@renderer/lib/utils'
import { AspectRatio } from '@renderer/components/ui/aspect-ratio'
import { Avatar, AvatarFallback, AvatarImage } from '@renderer/components/ui/avatar'
import { Button } from '@renderer/components/ui/button'
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger
} from '@renderer/components/ui/context-menu'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@renderer/components/ui/dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger
} from '@renderer/components/ui/dropdown-menu'
import { Input } from '@renderer/components/ui/input'
import { Label } from '@renderer/components/ui/label'
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger
} from '@renderer/components/ui/menubar'
import { ScrollArea, ScrollBar } from '@renderer/components/ui/scroll-area'
import { Separator } from '@renderer/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@renderer/components/ui/tabs'

const playlists = [
  'Recently Added',
  'Recently Played',
  'Top Songs',
  'Top Albums',
  'Top Artists',
  'Logic Discography',
  'Bedtime Beats',
  'Feeling Happy',
  'I miss Y2K Pop',
  'Runtober',
  'Mellow Days',
  'Eminem Essentials'
]

interface Album {
  name: string
  artist: string
  cover: string
}

const listenNowAlbums: Album[] = [
  {
    name: 'Async Awakenings',
    artist: 'Nina Netcode',
    cover: 'https://images.unsplash.com/photo-1547355253-ff0740f6e8c1?w=300&dpr=2&q=80'
  },
  {
    name: 'The Art of Reusability',
    artist: 'Lena Logic',
    cover: 'https://images.unsplash.com/photo-1576075796033-848c2a5f3696?w=300&dpr=2&q=80'
  },
  {
    name: 'Stateful Symphony',
    artist: 'Beth Binary',
    cover: 'https://images.unsplash.com/photo-1606542758304-820b04394ac2?w=300&dpr=2&q=80'
  },
  {
    name: 'React Rendezvous',
    artist: 'Ethan Byte',
    cover: 'https://images.unsplash.com/photo-1598295893369-1918ffaf89a2?w=300&dpr=2&q=80'
  }
]

const madeForYouAlbums: Album[] = [
  {
    name: 'Async Awakenings',
    artist: 'Nina Netcode',
    cover: 'https://images.unsplash.com/photo-1580428180098-24b353d7e9d9?w=300&dpr=2&q=80'
  },
  {
    name: 'Stateful Symphony',
    artist: 'Beth Binary',
    cover: 'https://images.unsplash.com/photo-1606542758304-820b04394ac2?w=300&dpr=2&q=80'
  },
  {
    name: 'Stateful Symphony',
    artist: 'Beth Binary',
    cover: 'https://images.unsplash.com/photo-1598062548091-a6fb6a052562?w=300&dpr=2&q=80'
  },
  {
    name: 'The Art of Reusability',
    artist: 'Lena Logic',
    cover: 'https://images.unsplash.com/photo-1626759486966-c067e3f79982?w=300&dpr=2&q=80'
  },
  {
    name: 'Thinking Components',
    artist: 'Lena Logic',
    cover: 'https://images.unsplash.com/photo-1576075796033-848c2a5f3696?w=300&dpr=2&q=80'
  },
  {
    name: 'Functional Fury',
    artist: 'Beth Binary',
    cover: 'https://images.unsplash.com/photo-1606542758304-820b04394ac2?w=300&dpr=2&q=80'
  },
  {
    name: 'React Rendezvous',
    artist: 'Ethan Byte',
    cover: 'https://images.unsplash.com/photo-1598295893369-1918ffaf89a2?w=300&dpr=2&q=80'
  }
]

export function AppleMusicDemo() {
  return (
    <div className="">
      <div className="rounded-md bg-white shadow-2xl transition-all dark:bg-slate-900">
        <div className="grid grid-cols-4 xl:grid-cols-5">
          <aside className="pb-12">
            <div className="px-8 py-6">
              <p className="flex items-center text-2xl font-semibold tracking-tight">
                <Music className="mr-2" />
                Music
              </p>
            </div>
            <div className="space-y-4">
              <div className="px-6 py-2">
                <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">Discover</h2>
                <div className="space-y-1">
                  <Button variant="subtle" size="sm" className="w-full justify-start">
                    <PlayCircle className="mr-2 h-4 w-4" />
                    Listen Now
                  </Button>
                  <Button variant="ghost" size="sm" className="w-full justify-start">
                    <LayoutGrid className="mr-2 h-4 w-4" />
                    Browse
                  </Button>
                  <Button variant="ghost" size="sm" className="w-full justify-start">
                    <Radio className="mr-2 h-4 w-4" />
                    Radio
                  </Button>
                </div>
              </div>
              <div className="px-6 py-2">
                <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">Library</h2>
                <div className="space-y-1">
                  <Button variant="ghost" size="sm" className="w-full justify-start">
                    <ListMusic className="mr-2 h-4 w-4" />
                    Playlists
                  </Button>
                  <Button variant="ghost" size="sm" className="w-full justify-start">
                    <Music2 className="mr-2 h-4 w-4" />
                    Songs
                  </Button>
                  <Button variant="ghost" size="sm" className="w-full justify-start">
                    <User className="mr-2 h-4 w-4" />
                    Made for You
                  </Button>
                  <Button variant="ghost" size="sm" className="w-full justify-start">
                    <Mic2 className="mr-2 h-4 w-4" />
                    Artists
                  </Button>
                  <Button variant="ghost" size="sm" className="w-full justify-start">
                    <Library className="mr-2 h-4 w-4" />
                    Albums
                  </Button>
                </div>
              </div>
              <div className="py-2">
                <h2 className="relative px-8 text-lg font-semibold tracking-tight">Playlists</h2>
                <ScrollArea className="h-[230px] px-4">
                  <div className="space-y-1 p-2">
                    {playlists.map((playlist, index) => (
                      <Button
                        key={`${playlist}-${index}`}
                        variant="ghost"
                        size="sm"
                        className="w-full justify-start font-normal"
                      >
                        <ListMusic className="mr-2 h-4 w-4" />
                        {playlist}
                      </Button>
                    ))}
                  </div>
                </ScrollArea>
              </div>
            </div>
          </aside>
          <div className="col-span-3 border-l border-l-slate-200 dark:border-l-slate-700 xl:col-span-4"></div>
        </div>
      </div>
    </div>
  )
}

interface AlbumArtworkProps extends React.HTMLAttributes<HTMLDivElement> {
  album: Album
  aspectRatio?: number
}

function AlbumArtwork({ album, aspectRatio = 3 / 4, className, ...props }: AlbumArtworkProps) {
  return (
    <div className={cn('space-y-3', className)} {...props}>
      <ContextMenu>
        <ContextMenuTrigger>
          <AspectRatio ratio={aspectRatio} className="overflow-hidden rounded-md">
            <img
              src={album.cover}
              alt={album.name}
              className="object-cover transition-all hover:scale-105"
            />
          </AspectRatio>
        </ContextMenuTrigger>
        <ContextMenuContent className="w-40">
          <ContextMenuItem>Add to Library</ContextMenuItem>
          <ContextMenuSub>
            <ContextMenuSubTrigger>Add to Playlist</ContextMenuSubTrigger>
            <ContextMenuSubContent className="w-48">
              <ContextMenuItem>
                <PlusCircle className="mr-2 h-4 w-4" />
                New Playlist
              </ContextMenuItem>
              <ContextMenuSeparator />
              {playlists.map((playlist) => (
                <ContextMenuItem key={playlist}>
                  <ListMusic className="mr-2 h-4 w-4" /> {playlist}
                </ContextMenuItem>
              ))}
            </ContextMenuSubContent>
          </ContextMenuSub>
          <ContextMenuSeparator />
          <ContextMenuItem>Play Next</ContextMenuItem>
          <ContextMenuItem>Play Later</ContextMenuItem>
          <ContextMenuItem>Create Station</ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem>Like</ContextMenuItem>
          <ContextMenuItem>Share</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
      <div className="space-y-1 text-sm">
        <h3 className="font-medium leading-none">{album.name}</h3>
        <p className="text-xs text-slate-500 dark:text-slate-400">{album.artist}</p>
      </div>
    </div>
  )
}
